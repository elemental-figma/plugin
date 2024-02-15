import { baseNodeMixin, blendMixin, constraintsMixin, cornerMixin, exportMixin, geometryMixin, layoutMixin, sceneNodeMixin } from "../mixins";
import { propsAssign } from "../utils";


const ellipseNodePropsAssign = propsAssign<EllipseProps, EllipseProps>(['arcData']);

export default (node: EllipseNode) => (props: EllipseProps | any) => {
    const ellipseNode = node || props.node || figma.createEllipse();

    baseNodeMixin(ellipseNode)(props);
    layoutMixin(ellipseNode)(props);
    geometryMixin(ellipseNode)(props);
    exportMixin(ellipseNode)(props);
    cornerMixin(ellipseNode)(props);
    blendMixin(ellipseNode)(props);
    sceneNodeMixin(ellipseNode)(props);
    constraintsMixin(ellipseNode)(props);

    ellipseNodePropsAssign(ellipseNode)(props);

    return ellipseNode;
};
