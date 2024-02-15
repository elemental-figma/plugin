import { autoLayoutMixin, baseNodeMixin, blendMixin, constraintsMixin, cornerMixin, exportMixin, frameMixin, frameSpecificMixin, geometryMixin, layoutMixin, publishableMixin, rectangleNodeMixin, sceneNodeMixin } from "../mixins";

type ComponentProps = any;

export default (node: ComponentNode) => (props: ComponentProps) => {
  const componentNode = node || figma.createComponent();

  baseNodeMixin(componentNode)(props);
  layoutMixin(componentNode)(props);
  exportMixin(componentNode)(props);
  blendMixin(componentNode)(props);
  geometryMixin(componentNode)(props);
  cornerMixin(componentNode)(props);
  rectangleNodeMixin(componentNode)(props);
  constraintsMixin(componentNode)(props);
  autoLayoutMixin(componentNode)(props);

  frameMixin(componentNode)(props);
  frameSpecificMixin(componentNode)(props);
  sceneNodeMixin(componentNode)(props);
  publishableMixin(componentNode)(props);

  return componentNode;
};