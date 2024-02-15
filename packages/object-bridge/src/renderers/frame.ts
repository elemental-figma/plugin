import { autoLayoutMixin, baseNodeMixin, blendMixin, constraintsMixin, cornerMixin, exportMixin, frameMixin, frameSpecificMixin, geometryMixin, layoutMixin, rectangleNodeMixin, sceneNodeMixin } from '../mixins';

type FrameNodeProps = any;

export default (node: FrameNode) => (props: FrameNodeProps) => {
    const frameNode = node || props.node || figma.createFrame();

    baseNodeMixin(frameNode)(props);
    layoutMixin(frameNode)(props);
    exportMixin(frameNode)(props);
    blendMixin(frameNode)(props);
    geometryMixin(frameNode)(props);
    cornerMixin(frameNode)(props);
    rectangleNodeMixin(frameNode)(props);
    constraintsMixin(frameNode)(props);
    autoLayoutMixin(frameNode)(props);

    frameMixin(frameNode)(props);
    frameSpecificMixin(frameNode)(props);
    sceneNodeMixin(frameNode)(props);

    return frameNode;
};