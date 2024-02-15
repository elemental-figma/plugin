import {
  baseNodeMixin,
  layoutMixin,
  geometryMixin,
  exportMixin,
  blendMixin,
  sceneNodeMixin,
  constraintsMixin,
} from "../mixins";

export default (node: RectangleNode) => (props: LineProps | any) => {
  const lineNode = node || props.node || figma.createLine();

  baseNodeMixin(lineNode)(props);
  layoutMixin(lineNode)(props);
  geometryMixin(lineNode)(props);
  exportMixin(lineNode)(props);
  blendMixin(lineNode)(props);
  sceneNodeMixin(lineNode)(props);
  constraintsMixin(lineNode)(props);

  return lineNode;
};