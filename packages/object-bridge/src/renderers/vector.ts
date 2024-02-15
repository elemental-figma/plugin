import {
  baseNodeMixin,
  layoutMixin,
  geometryMixin,
  cornerMixin,
  exportMixin,
  blendMixin,
  sceneNodeMixin,
  constraintsMixin,
} from "../mixins";
import { propsAssign } from "../utils";

type VectorProps = any;

const vectorNodePropsAssign = propsAssign<VectorProps, VectorProps>([
  'vectorPaths',
  'vectorNetwork',
  'handleMirroring'
]);

export default (node: VectorNode) => (props: VectorProps) => {
  const vectorNode = node || props.node || figma.createVector();

  baseNodeMixin(vectorNode)(props);
  layoutMixin(vectorNode)(props);
  geometryMixin(vectorNode)(props);
  cornerMixin(vectorNode)(props);
  exportMixin(vectorNode)(props);
  blendMixin(vectorNode)(props);
  vectorNodePropsAssign(vectorNode)(props);
  sceneNodeMixin(vectorNode)(props);
  constraintsMixin(vectorNode)(props);

  return vectorNode;
};