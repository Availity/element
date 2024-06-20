import { graphql, http, HttpResponse, delay } from 'msw';
import { parse } from 'qs';

import * as routes from './routes';
import axiUserPermissions from './data/axi-user-permissions.json';
import region from './data/region.json';
import regions from './data/regions.json';
import organizations from './data/organizations.json';
import user from './data/user.json';
import configurationPagination1 from './data/thanos/configuration-pagination-1.json';
import configurationPagination2 from './data/thanos/configuration-pagination-2.json';
import configurationId1 from './data/thanos/configuration-id-1.json';
import configurationId2 from './data/thanos/configuration-id-2.json';
import configurationId3 from './data/thanos/configuration-id-3.json';
import configurationId112233 from './data/thanos/configuration-id-112233.json';
import ghostedConfiguration from './data/thanos/ghosted-configuration.json';
import agreementConfiguration from './data/thanos/agreement-configurations.json';
import disclaimerConfiguration from './data/thanos/disclaimer-configurations.json';

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

const defaultDelay = 500; // .5 sec

export const handlers = [
  // Logging
  http.post(routes.LOG, async () => {
    await delay(defaultDelay);
    return new HttpResponse(null, { status: 201 });
  }),

  // Region
  http.get(routes.REGIONS, async (whatup) => {
    const { request } = whatup;
    // Check if the request wants one region or a list
    const { currentlySelected } = parse(request.url.split('?')[1], { ignoreQueryPrefix: true });

    await delay(defaultDelay);

    return HttpResponse.json(currentlySelected === 'true' ? region : regions, { status: 200 });
  }),
  http.post(routes.REGIONS, async () => {
    await delay(defaultDelay);
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

  // Thanos
  graphql.query('configurationFindMany', ({ variables: { payerIds, page, ids } }) => {
    let response: ConfigurationFindMany = configurationPagination1;

    if (payerIds) {
      response = configurationId112233;
    } else if (page === 2) {
      response = configurationPagination2;
    } else if (ids && ids.length === 1 && ids[0] === '1') {
      response = configurationId1;
    } else if (ids && ids.length === 1 && ids[0] === '2') {
      response = configurationId2;
    } else if (ids && ids.length === 1 && ids[0] === '3') {
      response = configurationId3;
    } else if (ids && ids[0] === 'ghosted') {
      response = ghostedConfiguration;
    } else if ((ids && ids[0] === 'agreement') || (ids && ids[0] === 'agreementMarkdown')) {
      response = agreementConfiguration;
    } else if ((ids && ids[0] === 'disclaimer') || (ids && ids[0] === 'disclaimerMarkdown')) {
      response = disclaimerConfiguration;
    } else if (
      (ids && ids[0] === '1' && ids[1] === '2' && ids[2] === '3') ||
      (ids && ids[0] === '11' && ids[1] === '22' && ids[2] === '33')
    ) {
      response = configurationId112233;
    }

    return HttpResponse.json(response, { status: 200 });
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

    await delay(defaultDelay);

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
    await delay(defaultDelay);

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
