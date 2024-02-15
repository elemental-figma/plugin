import { baseNodeMixin, blendMixin, constraintsMixin, cornerMixin, exportMixin, geometryMixin, layoutMixin, rectangleNodeMixin, sceneNodeMixin } from "../mixins";

export default (node: RectangleNode) => (props: RectangleProps | any) => {
    const rect = node || props.node || figma.createRectangle();

    baseNodeMixin(rect)(props);
    layoutMixin(rect)(props);
    geometryMixin(rect)(props);
    cornerMixin(rect)(props);
    rectangleNodeMixin(rect)(props);
    exportMixin(rect)(props);
    blendMixin(rect)(props);
    sceneNodeMixin(rect)(props);
    constraintsMixin(rect)(props);

    return rect;
};