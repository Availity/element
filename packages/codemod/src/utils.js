import fs from 'fs';
import { EOL } from 'os';

export function readFile(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8').toString();

  if (EOL !== '\n') {
    return fileContents.replace(/\n/g, EOL);
  }

  return fileContents;
}

export const getCreateBuildStyle = (j) =>
  function createBuildStyle(key, upperBuildStyle, applyStylesMode) {
    if (applyStylesMode) {
      upperBuildStyle = (styleExpression) =>
        j.objectExpression([
          j.spreadElement(
            j.callExpression(
              j.memberExpression(j.identifier('theme'), j.identifier('applyStyles')),
              [j.stringLiteral(applyStylesMode), styleExpression],
            ),
          ),
        ]);
    }
    return function buildStyle(styleExpression) {
      if (key) {
        if (key.type === 'Identifier' || key.type === 'StringLiteral') {
          return upperBuildStyle(j.objectExpression([j.objectProperty(key, styleExpression)]));
        }
        if (key.type === 'TemplateLiteral' || key.type === 'CallExpression') {
          return upperBuildStyle(
            j.objectExpression([
              {
                ...j.objectProperty(key, styleExpression),
                computed: true,
              },
            ]),
          );
        }
      }
      return upperBuildStyle ? upperBuildStyle(styleExpression) : styleExpression;
    };
  };

export const getAppendPaletteModeStyles = (j) => function appendPaletteModeStyles(node, modeStyles) {
  Object.entries(modeStyles).forEach(([mode, objectStyles]) => {
    node.properties.push(
      j.spreadElement(
        j.callExpression(j.memberExpression(j.identifier('theme'), j.identifier('applyStyles')), [
          j.stringLiteral(mode),
          Array.isArray(objectStyles) ? j.objectExpression(objectStyles) : objectStyles,
        ]),
      ),
    );
  });
};

export const getBuildArrowFunctionAST = (j) => function buildArrowFunctionAST(params, body) {
  const destructured = [...params].every((param) => typeof param === 'string');
  return j.arrowFunctionExpression(
    destructured ? [
      j.objectPattern(
        [...params].map((k) => ({
          ...j.objectProperty(j.identifier(k), j.identifier(k)),
          shorthand: true,
        })),
      ),
    ]
      : params,
    body,
  );
};

export function getReturnExpression(node) {
  let body = node.body;
  if (body === 'BlockStatement') {
    body = body.body;
  }

  if (Array.isArray(body)) {
    return body.find((statement) => statement.type === 'ReturnStatement')?.argument;
  }
  return body;
}

export function getObjectKey(node) {
  let tempNode = { ...node };
  while (tempNode.type === 'UnaryExpression') {
    tempNode = tempNode.argument;
  }
  while (tempNode.type === 'MemberExpression' || tempNode.type === 'OptionMemberExpression') {
    tempNode = tempNode.object;
  }
  return tempNode;
}

export function removeProperty(parentNode, child) {
  if (parentNode) {
    if (parentNode.type === 'ObjectExpression') {
      parentNode.properties = parentNode.properties.filter(
        (prop) => prop !== child && prop.value !== child,
      );
    }
  }
}

export function isThemePaletteMode(node) {
  return (
    node?.type === 'MemberExpression' &&
    node.object.type === 'MemberExpression' &&
    node.object.object.name === 'theme' &&
    node.object.property.name === 'palette' &&
    node.property.name === 'mode'
  );
}
