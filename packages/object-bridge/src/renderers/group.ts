import { baseNodeMixin, blendMixin, exportMixin, frameMixin, layoutMixin, sceneNodeMixin } from "../mixins";

const createNewGroup = () => {
  const rect = figma.createRectangle();
  rect.setPluginData('isGroupStubElement', 'true');
  return figma.group([rect], figma.currentPage);
};

export default node => props => {
  const frameNode = node || props.node || createNewGroup();

  baseNodeMixin(frameNode)(props);
  layoutMixin(frameNode)(props);
  exportMixin(frameNode)(props);
  blendMixin(frameNode)(props);

  frameMixin(frameNode)(props);
  sceneNodeMixin(frameNode)(props);

  return frameNode;
};
