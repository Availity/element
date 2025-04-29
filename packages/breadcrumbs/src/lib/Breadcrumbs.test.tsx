import { render } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';
import { Link } from '@availity/mui-link';

describe('Breadcrumbs', () => {
  describe('rending with crumbs', () => {
    test('should render successfully with crumbs', () => {
      const { getByTestId } = render(
        <Breadcrumbs
          data-testid="testBreadcrumbs"
          crumbs={[
            { name: 'Grand Parent', url: '/grandparent' },
            { name: 'Parent', url: '/grandparent/parent' },
          ]}
        />
      );

      const breadcrumbs = getByTestId('testBreadcrumbs').getElementsByClassName('MuiBreadcrumbs-li');

      expect(breadcrumbs.length).toBe(4);

      const homeBreadcrumb = breadcrumbs[0].getElementsByTagName('a')[0];
      expect(homeBreadcrumb).toHaveAttribute('aria-label', 'Home');
      expect(homeBreadcrumb).toHaveAttribute('href', '/public/apps/dashboard');
      expect(homeBreadcrumb).toHaveTextContent('Home');

      const grandparentBreadcrumb = breadcrumbs[1].getElementsByTagName('a')[0];
      expect(grandparentBreadcrumb).toHaveAttribute('aria-label', 'Grand Parent');
      expect(grandparentBreadcrumb).toHaveAttribute('href', '/public/apps/home/#!/loadApp?appUrl=%2Fgrandparent');
      expect(grandparentBreadcrumb).toHaveTextContent('Grand Parent');

      const parentBreadcrumb = breadcrumbs[2].getElementsByTagName('a')[0];
      expect(parentBreadcrumb).toHaveAttribute('aria-label', 'Parent');
      expect(parentBreadcrumb).toHaveAttribute('href', '/public/apps/home/#!/loadApp?appUrl=%2Fgrandparent%2Fparent');
      expect(parentBreadcrumb).toHaveTextContent('Parent');

      const currentPageBreadcrumb = breadcrumbs[3].getElementsByTagName('p')[0];
      expect(currentPageBreadcrumb).not.toHaveAttribute('aria-label');
      expect(currentPageBreadcrumb).not.toHaveAttribute('href');
      expect(currentPageBreadcrumb).toHaveTextContent('...');
    });

    test('should render successfully with children', () => {
      const { getByTestId } = render(
        <Breadcrumbs data-testid="testBreadcrumbs" children={<Link href="/custom/url">Custom Breadcrumb</Link>} />
      );

      const breadcrumbs = getByTestId('testBreadcrumbs').getElementsByClassName('MuiBreadcrumbs-li');

      expect(breadcrumbs.length).toBe(3);

      const homeBreadcrumb = breadcrumbs[0].getElementsByTagName('a')[0];
      expect(homeBreadcrumb).toHaveAttribute('aria-label', 'Home');
      expect(homeBreadcrumb).toHaveAttribute('href', '/public/apps/dashboard');
      expect(homeBreadcrumb).toHaveTextContent('Home');

      const customBreadcrumb = breadcrumbs[1].getElementsByTagName('a')[0];
      expect(customBreadcrumb).toHaveAttribute('href', '/public/apps/home/#!/loadApp?appUrl=%2Fcustom%2Furl');
      expect(customBreadcrumb).toHaveTextContent('Custom Breadcrumb');

      const currentPageBreadcrumb = breadcrumbs[2].getElementsByTagName('p')[0];
      expect(currentPageBreadcrumb).not.toHaveAttribute('aria-label');
      expect(currentPageBreadcrumb).not.toHaveAttribute('href');
      expect(currentPageBreadcrumb).toHaveTextContent('...');
    });

    test('should render successfully with a combination of children and crumbs', () => {
      const { getByTestId } = render(
        <Breadcrumbs
          data-testid="testBreadcrumbs"
          children={<Link href="/custom/url">Custom Breadcrumb</Link>}
          crumbs={[
            { name: 'Grand Parent', url: '/grandparent' },
            { name: 'Parent', url: '/grandparent/parent' },
          ]}
        />
      );

      const breadcrumbs = getByTestId('testBreadcrumbs').getElementsByClassName('MuiBreadcrumbs-li');

      expect(breadcrumbs.length).toBe(5);

      const homeBreadcrumb = breadcrumbs[0].getElementsByTagName('a')[0];
      expect(homeBreadcrumb).toHaveAttribute('aria-label', 'Home');
      expect(homeBreadcrumb).toHaveAttribute('href', '/public/apps/dashboard');
      expect(homeBreadcrumb).toHaveTextContent('Home');

      const grandparentBreadcrumb = breadcrumbs[1].getElementsByTagName('a')[0];
      expect(grandparentBreadcrumb).toHaveAttribute('aria-label', 'Grand Parent');
      expect(grandparentBreadcrumb).toHaveAttribute('href', '/public/apps/home/#!/loadApp?appUrl=%2Fgrandparent');
      expect(grandparentBreadcrumb).toHaveTextContent('Grand Parent');

      const parentBreadcrumb = breadcrumbs[2].getElementsByTagName('a')[0];
      expect(parentBreadcrumb).toHaveAttribute('aria-label', 'Parent');
      expect(parentBreadcrumb).toHaveAttribute('href', '/public/apps/home/#!/loadApp?appUrl=%2Fgrandparent%2Fparent');
      expect(parentBreadcrumb).toHaveTextContent('Parent');

      const customBreadcrumb = breadcrumbs[3].getElementsByTagName('a')[0];
      expect(customBreadcrumb).toHaveAttribute('href', '/public/apps/home/#!/loadApp?appUrl=%2Fcustom%2Furl');
      expect(customBreadcrumb).toHaveTextContent('Custom Breadcrumb');

      const currentPageBreadcrumb = breadcrumbs[4].getElementsByTagName('p')[0];
      expect(currentPageBreadcrumb).not.toHaveAttribute('aria-label');
      expect(currentPageBreadcrumb).not.toHaveAttribute('href');
      expect(currentPageBreadcrumb).toHaveTextContent('...');
    });

    test('crumb should have default target of _top', () => {
      const { getByTestId } = render(
        <Breadcrumbs
          data-testid="testBreadcrumbs"
          crumbs={[
            { name: 'Grand Parent', url: '/grandparent' },
            { name: 'Parent', url: '/grandparent/parent' },
          ]}
        />
      );

      const breadcrumbs = getByTestId('testBreadcrumbs').getElementsByClassName('MuiBreadcrumbs-li');
      const grandparentBreadcrumb = breadcrumbs[1].getElementsByTagName('a')[0];

      expect(grandparentBreadcrumb).toHaveAttribute('target', '_top');
    });

    test('crumb should set target to what is passed in config', () => {
      const { getByTestId } = render(
        <Breadcrumbs
          data-testid="testBreadcrumbs"
          crumbs={[
            { name: 'Grand Parent', url: '/grandparent', target: '_self' },
            { name: 'Parent', url: '/grandparent/parent' },
          ]}
          LinkProps={{ loadApp: false }}
        />
      );

      const breadcrumbs = getByTestId('testBreadcrumbs').getElementsByClassName('MuiBreadcrumbs-li');
      const grandparentBreadcrumb = breadcrumbs[1].getElementsByTagName('a')[0];

      expect(grandparentBreadcrumb).toHaveAttribute('target', '_self');
    });
  });
});
