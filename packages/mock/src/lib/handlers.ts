import { graphql, http, HttpResponse, delay } from 'msw';
import { parse } from 'qs';

import * as routes from './routes';
import axiUserPermissions from './data/axi-user-permissions.json';
import region from './data/region.json';
import regions from './data/regions.json';
import { getConfigs } from './data/thanos';
import organizations from './data/organizations.json';
import user from './data/user.json';
import settings from './data/settings.json';
import avatarSettings from './data/avatarSettings.json';
import codes from './data/codes.json';

// type ConfigurationFindMany = {
//   data: {
//     configurationPagination: {
//       pageInfo: {
//         currentPage: number;
//         hasNextPage: boolean;
//       };
//       items: {
//         id: string;
//         configurationId: string;
//         payerIDs?: string[];
//       }[];
//     };
//   };
// };

const parsers: Record<string, (value: unknown) => string | number | boolean> = {
  dropdown: (value: unknown) => value === 'true',
  limit: Number,
  offset: (value: unknown) => Number(value),
};

const defaultDelay = process.env.NODE_ENV === 'test' ? 0 : 1000; // 1 sec

const delayRequest = async () => {
  if (defaultDelay) {
    return delay(defaultDelay);
  }
};

const testFile: Blob & { name?: string } = new Blob(['testfilewithwords'], { type: 'text/plain' });
testFile.name = 'testfilewithwords.txt';

const requestHeaders = new Map<string, Headers>();

export const handlers = [
  // Logging
  http.post(routes.LOG, async () => {
    await delayRequest();
    return new HttpResponse(null, { status: 201 });
  }),

  http.post(routes.LOGV2, () => new HttpResponse(null, { status: 201 })),

  // Region
  http.get(routes.REGIONS, async (whatup) => {
    const { request } = whatup;
    // Check if the request wants one region or a list
    const { currentlySelected } = parse(request.url.split('?')[1], { ignoreQueryPrefix: true });

    await delayRequest();

    return HttpResponse.json(currentlySelected === 'true' ? region : regions, { status: 200 });
  }),
  http.post(routes.REGIONS, async () => {
    await delayRequest();
    return HttpResponse.json(regions, { status: 200 });
  }),

  // AXI User Permissions
  http.get(routes.AXI_USER_PERMISSIONS, async (whatup) => {
    const { request } = whatup;
    const params = parse(request.url.split('?')[1], { ignoreQueryPrefix: true });
    const permissionIds = Array.isArray(params.permissionId) ? params.permissionId : [params.permissionId];
    // Only include permissions that were requested
    const response = {
      axiUserPermissions:
        !params.region || params.region === 'FL'
          ? axiUserPermissions.axiUserPermissions.filter(({ id }) => permissionIds.includes(id))
          : [],
    };

    // return permissions based on the request
    return HttpResponse.json(response, { status: 200 });
  }),

  // Settings API
  http.get(routes.SETTINGS, async (context) => {
    const { request } = context;
    const params = parse(request.url.split('?')[1], { ignoreQueryPrefix: true });

    if (params.applicationId === 'Gateway-AvNavigation') {
      await delay(defaultDelay);
      return HttpResponse.json(settings, { status: 200 });
    } else if (params.applicationId === 'AVATAR') {
      await delay(defaultDelay);
      return HttpResponse.json(avatarSettings, { status: 200 });
    }
  }),
  http.put(routes.SETTINGS, async (context) => {
    const body = await context.request.json();

    await delay(defaultDelay);
    return HttpResponse.json(body, { status: 201 });
  }),

  // Codes
  http.get(routes.CODES, async () => {
    await delayRequest();
    return HttpResponse.json(codes, { status: 200 });
  }),

  // Thanos
  graphql.query('configurationFindMany', ({ variables: { payerIds, page = 1, perPage, ids }, request }) => {
    const isLocal = request.url.includes('localhost');
    const configs = getConfigs({ payerIds, ids, isLocal });
    const totalCount = configs.length;

    if (!perPage) {
      return HttpResponse.json(
        {
          data: {
            configurationPagination: {
              pageInfo: {
                currentPage: 1,
                hasNextPage: false,
              },
              items: configs,
            },
          },
        },
        { status: 200 }
      );
    }

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const items = configs.slice(startIndex, endIndex);
    const hasNextPage = endIndex < totalCount;

    return HttpResponse.json(
      {
        data: {
          configurationPagination: {
            pageInfo: {
              currentPage: page,
              hasNextPage,
            },
            items,
          },
        },
      },
      { status: 200 }
    );
  }),

  graphql.query('disclaimerFindOne', ({ variables: { id }, request }) => {
    const isLocal = request.url.includes('localhost');
    const config = getConfigs({ ids: [id], isLocal });

    return HttpResponse.json(
      {
        data: {
          configurationFindOne: config[0],
        },
      },
      { status: 200 }
    );
  }),

  // User
  http.get(routes.USERS, () => {
    return HttpResponse.json(user);
  }),

  // Organizations
  http.post(routes.ORGANIZATIONS, ({ request }) => {
    const params = new URLSearchParams(request.url.split('?')[1]);
    const parsedParams: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      parsedParams[key] = value;
    }
    if (parsedParams) {
      const orgs = organizations.organizations.slice(
        Number(parsedParams.offset),
        Number(parsedParams.limit) + Number(parsedParams.offset)
      );
      return HttpResponse.json({
        totalCount: organizations.totalCount,
        count: orgs.length,
        limit: parsedParams.limit,
        links: {
          self: {
            href: 'https://apps.availity.com/api/sdk/platform/v1/organizations',
          },
          user: {
            href: 'https://apps.availity.com/api/sdk/platform/v1/users/aka123456789',
          },
        },
        organizations: orgs,
      });
    }
    return HttpResponse.json(organizations);
  }),
  http.get(routes.ORGANIZATIONS, async ({ request }) => {
    const params = new URLSearchParams(request.url.split('?')[1]);
    const parsedParams: Record<string, unknown> = {};
    for (const [key, value] of params.entries()) {
      parsedParams[key] = parsers[key]?.(value) ?? value;
    }

    await delayRequest();

    if (typeof parsedParams.offset !== 'number' || typeof parsedParams.limit !== 'number') {
      throw new Error('offset and limit not provided');
    }

    const total = 50;
    const orgs: { id: string; customerId: string; name: string }[] = [];
    for (let i = parsedParams.offset; i < parsedParams.offset + parsedParams.limit; i++) {
      if (i >= total) break;
      orgs.push({ id: crypto.randomUUID(), customerId: `${i}`, name: `Organization ${i}` });
    }
    return HttpResponse.json({ organizations: orgs, count: orgs.length, totalCount: total });
  }),

  // Providers
  http.get(routes.PROVIDERS, async ({ request }) => {
    await delayRequest();

    const params = new URLSearchParams(request.url.split('?')[1]);
    const parsedParams: Record<string, unknown> = {};
    for (const [key, value] of params.entries()) {
      parsedParams[key] = parsers[key]?.(value) ?? value;
    }

    if (typeof parsedParams.offset !== 'number' || typeof parsedParams.limit !== 'number') {
      throw new Error('offset and limit not provided');
    }

    const total = 50;
    const options: { id: string; uiDisplayName: string }[] = [];

    for (let i = parsedParams.offset; i < parsedParams.offset + parsedParams.limit; i++) {
      if (i >= total) break;
      options.push({ id: crypto.randomUUID(), uiDisplayName: `Provider ${i}` });
    }

    return HttpResponse.json({
      providers: options,
      count: options.length,
      totalCount: total,
    });
  }),

  // Attachments
  http.post(routes.ATTACHMENTS_POST, async () => {
    await delay(1000);

    return new HttpResponse(null, {
      status: 201,
      headers: {
        'cache-control': 'no-store',
        'transfer-encoding': 'chunked',
        'tus-resumable': '1.0.0',
        'upload-expires': 'Fri, 12 Jan 2030 15:54:39 GMT',
        location: '11223344aabbccdd556677',
      },
    });
  }),
  http.patch(routes.ATTACHMENTS_PATCH, async ({ request }) => {
    const reqOffset = Number(request.headers.get('upload-offset'));
    await delay(1000);

    return new HttpResponse(null, {
      status: 204,
      headers: {
        'cache-control': 'no-store',
        'tus-resumable': '1.0.0',
        'upload-expires': 'Fri, 12 Jan 2030 15:54:39 GMT',
        'upload-offset': reqOffset === 0 ? `${testFile.size / 2}` : `${testFile.size}`,
      },
    });
  }),
  http.head(routes.ATTACHMENTS_PATCH, async ({ params }) => {
    await delay(1000);

    return new HttpResponse(testFile, {
      status: 200,
      headers: {
        'av-scan-bytes': `${testFile.size}`,
        'av-scan-result': 'accepted',
        'cache-control': 'no-store',
        references: `["approved/${params.bucketId}/${params.location}"]`,
        's3-references': `["s3://path-to-vault/approved/${params.bucketId}/01234/${params.location}"]`,
        'transfer-encoding': 'chunked',
        'tus-resumable': '1.0.0',
        'upload-length': `${testFile.size}`,
        'upload-metadata':
          'availity-filename LnR4dAo=,availity-content-type dGV4dC9wbGFpbgo=,availity-attachment-name Ti9BCg==',
        'upload-offset': `${testFile.size}`,
        'upload-result': 'accepted',
      },
    });
  }),

  // Attachments Cloud
  http.post(routes.ATTACHMENTS_CLOUD_POST, async ({ request, requestId }) => {
    await delay(1000);

    // Save file size for patch request
    requestHeaders.set(requestId, request.headers);

    return new HttpResponse(null, {
      status: 201,
      headers: {
        'cache-control': 'no-store',
        'transfer-encoding': 'chunked',
        'tus-resumable': '1.0.0',
        'upload-expires': 'Fri, 12 Jan 2030 15:54:39 GMT',
        location: requestId,
      },
    });
  }),

  http.patch<{ location: string }>(routes.ATTACHMENTS_CLOUD_PATCH, async ({ request, params }) => {
    await delay(1000);

    // Parse passed in offset
    let reqOffset = Number(request.headers.get('upload-offset'));
    reqOffset = Number.isNaN(reqOffset) ? 0 : reqOffset;

    // Get file size from previous request
    let fileSize = Number(requestHeaders.get(params.location)?.get('upload-length'));
    fileSize = Number.isNaN(fileSize) ? 0 : fileSize;

    // If it's the first page then return half the file size
    const offset = reqOffset === 0 ? `${fileSize / 2}` : `${fileSize}`;

    return new HttpResponse(null, {
      status: 204,
      headers: {
        'cache-control': 'no-store',
        'tus-resumable': '1.0.0',
        'upload-expires': 'Fri, 12 Jan 2030 15:54:39 GMT',
        'upload-offset': offset,
      },
    });
  }),

  http.head<{ bucket: string; location: string }>(routes.ATTACHMENTS_CLOUD_HEAD, async ({ request, params }) => {
    const headers = requestHeaders.get(params.location);

    const fileSize = headers?.get('upload-length') || '0';
    const metadata = headers?.get('upload-metadata') || '';
    const password = request.headers.get('Encryption-Password') || '';

    const results: Record<string, string> = {
      abc: 'accepted',
      enc: 'encrypted',
      mno: 'pending',
      xyz: 'rejected',
    };

    if (password) {
      return password === "1234" ?
      new HttpResponse(null, {
        status: 200,
        headers: {
          'av-scan-bytes': fileSize,
          'av-scan-result': 'accepted',
          'cache-control': 'no-store',
          'decryption-result': 'accepted',
          references: `["approved/${params.bucket}/${params.location}"]`,
          's3-references': `["s3://path-to-vault/approved/${params.bucket}/${params.location}"]`,
          'transfer-encoding': 'chunked',
          'tus-resumable': '1.0.0',
          'upload-length': fileSize,
          'upload-metadata': metadata,
          'upload-offset': fileSize,
          'upload-result': 'accepted',
        },
      })
      :
      new HttpResponse(null, {
        status: 200,
        headers: {
          'av-scan-bytes': fileSize,
          'av-scan-result': 'accepted',
          'cache-control': 'no-store',
          'decryption-result': 'rejected',
          references: `["approved/${params.bucket}/${params.location}"]`,
          's3-references': `["s3://path-to-vault/approved/${params.bucket}/${params.location}"]`,
          'transfer-encoding': 'chunked',
          'tus-resumable': '1.0.0',
          'upload-length': fileSize,
          'upload-metadata': metadata,
          'upload-offset': fileSize,
          'upload-result': 'encrypted',
        },
      });
    }

    await delay(1000);

    return new HttpResponse(null, {
      status: 200,
      headers: {
        'av-scan-bytes': fileSize,
        'av-scan-result': 'accepted',
        'cache-control': 'no-store',
        references: `["approved/${params.bucket}/${params.location}"]`,
        's3-references': `["s3://path-to-vault/approved/${params.bucket}/${params.location}"]`,
        'transfer-encoding': 'chunked',
        'tus-resumable': '1.0.0',
        'upload-length': fileSize,
        'upload-metadata': metadata,
        'upload-offset': fileSize,
        'upload-result': results[params.bucket] || 'accepted',
      },
    });
  }),

  // Example
  http.post(routes.EXAMPLE, async ({ request }) => {
    await delayRequest();

    const data = (await request.json()) as { offset: number; limit: number };

    if (!data) return HttpResponse.json({ message: 'Bad request' }, { status: 400 });

    const options: { label: string; value: number; id: string }[] = [];
    for (let i = data.offset; i < data.offset + data.limit; i++) {
      if (i >= 50) break;
      options.push({ label: `Option ${i}`, value: i, id: crypto.randomUUID() });
    }

    return HttpResponse.json({
      options,
      count: options.length,
      totalCount: 50,
    });
  }),
];
