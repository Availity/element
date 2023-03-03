import { createTree, createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { NxGeneratorGeneratorSchema } from './schema';

describe('nx-generator generator', () => {
  let appTree: Tree;
  const options: NxGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(async () => {
    appTree = createTreeWithEmptyWorkspace({layout: 'apps-libs'});
    await generator(appTree, { name: 'element' });
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'mui-test');
    expect(config).toBeDefined();
  });
});
