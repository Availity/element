import { graphql, http, HttpResponse, delay } from 'msw';
import { parse } from 'qs';

import * as routes from './routes';
import axiUserPermissions from './data/axi-user-permissions.json';
import region from './data/region.json';
import regions from './data/regions.json';
import { getConfigs } from './data/thanos';

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
}

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
  graphql.query('configurationFindMany', ({ variables: { payerIds, page = 1, perPage, ids } }) => {
    const configs = getConfigs({ payerIds, ids });
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
  })
];
