import { TreeItem } from './TreeItem';
import { TreeView, TreeViewProps } from './TreeView';

export interface JsonViewerProps extends Omit<TreeViewProps, 'children'> {
  /** Data to be rendered, can be most valid javascript objects, some uncommon types may not by fully supported - like cyclical objects, proxies, symbols as keys. */
  data: Record<string, unknown> | Record<string, unknown>[];
}

const isPrimitive = (value: unknown): value is string | number | boolean => {
  return ['string', 'number', 'boolean'].includes(typeof value);
};

const isObject = (value: unknown): value is Record<string, unknown> => {
  return !!value && typeof value === 'object';
};

const validateId = (id: string) => id.replace(/[^.\w:-]+/gi, '');

const getDetails = ({ data }: JsonViewerProps, parentKey?: string): (JSX.Element | null)[] => {
  return Object.entries(data).map((entry, index) => {
    const [key, value] = entry;

    if (isPrimitive(value)) {
      const label = `${key}: ${value.toString()}`;
      const id = validateId(parentKey ? `${parentKey}.${index}.${key}` : `${index}.${key}`);
      return <TreeItem label={label} itemId={id} key={id} />;
    }
    if (isObject(value)) {
      const label = `${key}: ${Array.isArray(value) ? `[ ] ${value.length} items` : `{ } ${Object.keys(value).length} keys`}`;
      const id = validateId(parentKey ? `${parentKey}.${index}.${key}` : `${index}.${key}`);
      return (
        <TreeItem label={label} itemId={id} key={id}>
          {getDetails({ data: value }, id)}
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
