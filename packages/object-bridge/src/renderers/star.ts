import {
  baseNodeMixin,
  layoutMixin,
  geometryMixin,
  exportMixin,
  cornerMixin,
  blendMixin,
  sceneNodeMixin,
  constraintsMixin,
 } from "../mixins";
import { propsAssign } from "../utils";


type StarProps = any;

const starNodePropsAssign = propsAssign<StarProps, StarProps>(['pointCount', 'innerRadius']);

export default (node: StarNode) => (props: StarProps) => {
    const starNode = node || props.node || figma.createStar();

    baseNodeMixin(starNode)(props);
    layoutMixin(starNode)(props);
    geometryMixin(starNode)(props);
    exportMixin(starNode)(props);
    cornerMixin(starNode)(props);
    blendMixin(starNode)(props);
    starNodePropsAssign(starNode)(props);
    sceneNodeMixin(starNode)(props);
    constraintsMixin(starNode)(props);

    return starNode;
};
