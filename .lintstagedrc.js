module.exports = {
  '*.{js,ts,tsx}': ['yarn nx affected --target=lint --fix --files', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.{md, mdx}': ['prettier --write'],
};
