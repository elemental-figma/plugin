import { baseNodeMixin, exportMixin, layoutMixin, sceneNodeMixin } from "../mixins";

type SliceProps = any;

export default (node: SliceNode) => (props: SliceProps) => {
  const sliceNode = node || figma.createSlice();

  baseNodeMixin(sliceNode)(props);
  layoutMixin(sliceNode)(props);
  exportMixin(sliceNode)(props);
  sceneNodeMixin(sliceNode)(props);

  return sliceNode;
};
