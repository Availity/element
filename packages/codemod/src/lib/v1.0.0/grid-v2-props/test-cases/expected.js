/* eslint-disable @nx/enforce-module-boundaries */
import { Grid as GridA } from '@availity/element';
import { Grid as GridB } from '@availity/mui-layout';

// Transforms on all the possible imports
<GridA size={2} />;
<GridB size={2} />;

<GridA />;
<GridA />;
<GridA />;

<GridA />;
<GridA />;
<GridA />;

// Transforms responsive sizes
<GridA
  size={{
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
  }} />;

// Transforms all the possible size values
<GridA
  size={{
    xs: "grow",
    sm: "auto",
    md: 2,
    lg: "grow",
    xl: false
  }} />;

// Doesn't add jsx object expression for single string values
<GridA size="auto" />;

// Transforms offset
<GridA offset={2} />;

// Transforms responsive offset
<GridA
  offset={{
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10
  }} />;

// Transforms all the possible offset values
<GridA
  offset={{
    xs: 2,
    sm: "auto"
  }} />;

// Transforms spread props
<GridA
  size={{
    xs: 2,
    sm: 4
  }}
  offset={{
    xs: 0,
    sm: 2
  }} />;
