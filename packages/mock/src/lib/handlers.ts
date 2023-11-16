import { http, HttpResponse, delay } from 'msw';
import { parse } from 'qs';

import * as routes from './routes';
import region from './data/region.json';
import regions from './data/regions.json';

const defaultDelay = 500; // .5 sec

export const handlers = [
  // Logging
  http.post(routes.LOG, async () => {
    await delay(defaultDelay);
    return new HttpResponse(null, { status: 201 });
  }),

  // Region
  http.get(routes.REGIONS, async ({ request }) => {
    // Check if the request wants one region or a list
    const { currentlySelected } = parse(request.url, { ignoreQueryPrefix: true });

    await delay(defaultDelay);

    return HttpResponse.json(currentlySelected === 'true' ? region : regions, { status: 200 });
  }),
  http.post(routes.REGIONS, async () => {
    await delay(defaultDelay);
    return HttpResponse.json(regions, { status: 200 });
  }),
];
