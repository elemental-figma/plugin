// https://github.com/react-figma/react-figma/blob/master/src/renderers/index.ts
// LICENSE: MIT License

import rectangle from './rectangle';
import text from './text';
import page from './page';
import frame from './frame';
import component from './component';
import componentset from './componentset';
import instance from './instance';
import star from './star';
import vector from './vector';
import line from './line';
import group from './group';
import ellipse from './ellipse';
import svg from './svg';
import slice from './slice';

export default {
  RECTANGLE: rectangle,
  TEXT: text,
  PAGE: page,
  FRAME: frame,
  COMPONENT: component,
  COMPONENTSET: componentset, // FIXME: Double check
  INSTANCE: instance,
  STAR: star,
  VECTOR: vector,
  LINE: line,
  GROUP: group,
  ELLIPSE: ellipse,
  SVG: svg,
  SLICE: slice,
}
