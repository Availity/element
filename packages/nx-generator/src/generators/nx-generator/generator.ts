import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  offsetFromRoot,
  Tree,
  updateJson,
} from '@nx/devkit';
import { join } from 'path';
import { NxGeneratorGeneratorSchema } from './schema';

interface NormalizedSchema extends NxGeneratorGeneratorSchema {
  componentName: string;
  packageName: string;
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(tree: Tree, options: NxGeneratorGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const componentName = names(options.name).className;
  const packageName = `mui-${names(options.name).fileName}`;
  const projectDirectory = options.directory ? `${names(options.directory).fileName}/${name}` : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags ? options.tags.split(',').map((s) => s.trim()) : [];

  return {
    ...options,
    componentName,
    packageName,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(tree, join(__dirname, 'files'), options.projectRoot, templateOptions);
}

export function getRootPathInTree(tree: Tree, filenames: string[]): string | null {
  for (const path of filenames) {
    if (tree.exists(path)) {
      return path;
    }
  }
  return null;
}

function addPathToRootTsConfig(host: Tree, options: NormalizedSchema) {
  const scopedPackageName = `@availity/${options.packageName}`;
  // const rootTsConfigPath = getRootPathInTree(host, ['tsconfig.base.json']) || 'tsconfig.base.json';
  updateJson(host, 'tsconfig.base.json', (json) => {
    const c = json.compilerOptions;
    c.paths = c.paths || {};
    delete c.paths[options.name];

    if (c.paths[scopedPackageName]) {
      throw new Error(
        `You already have a library using the import path "${scopedPackageName}". Make sure to specify a unique one.`
      );
    }

    c.paths[scopedPackageName] = [joinPathFragments(options.projectRoot, './src', 'index.ts')];

    c.paths = Object.keys(c.paths)
      .sort()
      .reduce<Record<string, unknown>>((sorted, key) => {
        sorted[key] = c.paths[key];
        return sorted;
      }, {});

    return json;
  });
}

function addDependencyToElement(tree: Tree, options: NormalizedSchema) {
  const scopedPackageName = `@availity/${options.packageName}`;
  const elementPath = `${getWorkspaceLayout(tree).libsDir}/element/package.json`;
  addDependenciesToPackageJson(tree, { [scopedPackageName]: 'workspace:*' }, {}, elementPath);
}

function addExportsToElement(tree: Tree, options: NormalizedSchema) {
  const scopedPackageName = `@availity/${options.packageName}`;
  const elementIndexPath = `${getWorkspaceLayout(tree).libsDir}/element/src/index.ts`;
  const indexContents = tree.read(elementIndexPath)?.toString().split(/\r?\n/) || [];
  indexContents.push(`// ${options.componentName}\nexport { ${options.componentName} } from '${scopedPackageName}';\nexport type { ${options.componentName}Props } from '${scopedPackageName}';`);

  tree.write(elementIndexPath, indexContents.join('\r\n'));
}

export default async function (tree: Tree, options: NxGeneratorGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'library',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: '@availity/nx-generator:build',
      },
    },
    tags: normalizedOptions.parsedTags,
  });
  console.log('\u2714 added project config');
  addFiles(tree, normalizedOptions);
  console.log('\u2714 added files');
  addPathToRootTsConfig(tree, normalizedOptions);
  console.log('\u2714 added path to tsconfig');
  addDependencyToElement(tree, normalizedOptions);
  console.log('\u2714 added new package dependency to @availity/element');
  addExportsToElement(tree, normalizedOptions);
  console.log("\u2714 added new package exports to @availity/element. Don't forget to add any additional named exports!");
  await formatFiles(tree);
  console.log(`@availity/mui-${names(options.name).fileName} generated! Don't forget to 'yarn install' again.\n`);
}
