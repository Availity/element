const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'shadow/spreadShadow',
  type: 'value',
  matcher: function (token) {
    return token.type === 'boxShadow';
  },
  transformer: (token) => {
    const shadows = Object.values(token.value);
    const result = shadows.map(
      (shadow) => `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
    );
    return result.join(',');
  },
});

StyleDictionary.registerTransformGroup({
  name: 'custom/web',
  transforms: ['shadow/spreadShadow', 'attribute/cti', 'name/cti/kebab', 'size/rem'],
});

StyleDictionary.registerTransformGroup({
  name: 'custom/js',
  transforms: ['shadow/spreadShadow', 'attribute/cti', 'name/cti/camel', 'size/rem'],
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend('../../packages/design-tokens/style-dictionary.config.json');
const StyleDictionaryLegacyExtended = StyleDictionary.extend(
  '../../packages/design-tokens/style-dictionary-legacy.config.json'
);

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();
StyleDictionaryLegacyExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');

// StyleDictionary.registerTransform({
//   name: 'shadow/spreadShadow',
//   type: 'value',
//   matcher: function(token) {
//     return token.type === 'boxShadow';
//   },
//   transformer: (token) => {
//     const result = shadows.map(shadow => `${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.spread} ${shadow.color} ${shadow.type}`);
//     return result;
//   }
// });
