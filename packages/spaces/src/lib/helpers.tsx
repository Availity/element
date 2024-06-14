import qs from 'qs';

export const updateUrl = (url: string, key: string, value: string) => {
  const [uri, queryString] = url.split('?');
  const currentParams = qs.parse(queryString);
  const newParams = qs.stringify({ ...currentParams, [key]: value }, { sort: (a, b) => a.localeCompare(b) });

  return `${uri}?${newParams}`;
};

export const getUrl = (url = '', loadApp: boolean, absolute: boolean) => {
  if (absolute || !loadApp) return url;

  return `/public/apps/home/#!/loadApp?appUrl=${encodeURIComponent(url)}`;
};

export const getTarget = (target: string) => {
  // should start with _, otherwise it is specifying a specific frame name
  // _blank = new tab/window, _self = same frame, _parent = parent frame (use for home page from modals), _top = document body, framename = specific frame
  if (target && !target.startsWith('_')) {
    if (target === 'BODY') {
      return '_self';
    }
    if (target === 'TAB') {
      return '_blank';
    }
  }

  return target || '_self';
};
