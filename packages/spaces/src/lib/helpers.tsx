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
