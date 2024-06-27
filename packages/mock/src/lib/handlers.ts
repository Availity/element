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

type ConfigurationFindMany = {
  data: {
    configurationPagination: {
      pageInfo: {
        currentPage: number;
        hasNextPage: boolean;
      };
      items: {
        id: string;
        configurationId: string;
        payerIDs?: string[];
      }[];
    };
  };
};

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

export const handlers = [
  // Logging
  http.post(routes.LOG, async () => {
    await delayRequest();
    return new HttpResponse(null, { status: 201 });
  }),

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
    }
  }),
  http.put(routes.SETTINGS, async (context) => {

    const body = await context.request.json();

    await delay(defaultDelay);
    return HttpResponse.json(body, { status: 201 });
  }),

  // Thanos
  graphql.query('configurationFindMany', ({ variables: { payerIds, page = 1, perPage, ids }, request }) => {
    const isLocal = request.url.includes('localhost');
    const configs = getConfigs({ payerIds, ids, isLocal });
    const totalCount = configs.length;

    if (!perPage) {
      return HttpResponse.json({
        data: {
          configurationPagination: {
            pageInfo: {
              currentPage: 1,
              hasNextPage: false,
            },
            items: configs,
          },
        },
      }, { status: 200 });
    }

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const items = configs.slice(startIndex, endIndex);
    const hasNextPage = endIndex < totalCount;

    return HttpResponse.json({
      data: {
        configurationPagination: {
          pageInfo: {
            currentPage: page,
            hasNextPage,
          },
          items,
        },
      },
    }, { status: 200 });
  }),

  // User
  http.get(routes.USERS, () => {
    return HttpResponse.json(user);
  }),

  // Organizations
  http.post(routes.ORGANIZATIONS, () => {
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
      orgs.push({ id: `${i}`, customerId: `${i}`, name: `Organization ${i}` });
    }
    return HttpResponse.json({ organizations: orgs, count: orgs.length, totalCount: total });
  }),

  // Example
  http.post(routes.EXAMPLE, async ({ request }) => {
    await delayRequest();

    const data = (await request.json()) as { offset: number; limit: number };

    if (!data) return HttpResponse.json({ message: 'Bad request' }, { status: 400 });

    const options: { label: string; value: number }[] = [];
    for (let i = data.offset; i < data.offset + data.limit; i++) {
      if (i >= 50) break;
      options.push({ label: `Option ${i}`, value: i });
    }

    return HttpResponse.json({
      options,
      count: options.length,
      totalCount: 50,
    });
  }),
];
