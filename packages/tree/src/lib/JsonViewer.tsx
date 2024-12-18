import { TreeItem } from './TreeItem';
import { TreeView, TreeViewProps } from './TreeView';

export interface JsonViewerProps extends Omit<TreeViewProps, 'children'> {
  /** Data to be rendered, can be most valid javascript objects, some uncommon types may not by fully supported - like cyclical objects, proxies, symbols as keys. */
  data: Record<string, unknown>;
}

const isPrimitive = (value: unknown): value is string | number | boolean => {
  return ['string', 'number', 'boolean'].includes(typeof value);
};

const isObject = (value: unknown): value is Record<string, unknown> => {
  return !!value && typeof value === 'object';
};

const getDetails = ({ data }: JsonViewerProps): (JSX.Element | null)[] => {
  return Object.entries(data).map((entry) => {
    const [key, value] = entry;

    if (isPrimitive(value)) {
      const label = `${key}: ${value.toString()}`;
      return <TreeItem label={label} itemId={`${key}.${value}`} key={`${key}.${value}`} />;
    }
    if (isObject(value)) {
      const label = `${key}: ${Array.isArray(value) ? `[ ] ${value.length} items` : `{ } ${Object.keys(value).length} keys`}`;
      return (
        <TreeItem label={label} itemId={key} key={key}>
          {getDetails({ data: value })}
        </TreeItem>
      );
    }

    return null;
  });
};

export const JsonViewer = ({ data, ...rest }: JsonViewerProps): JSX.Element => {
  const details = getDetails({ data });
  return <TreeView {...rest}>{details}</TreeView>;
};
