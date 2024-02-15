import { baseNodeMixin, blendMixin, constraintsMixin, exportMixin, frameMixin, layoutMixin, sceneNodeMixin } from "../mixins";
import { hashCode, safeGetPluginData } from "../utils";

const createNodeFromSvg = source => {
  const node = figma.createNodeFromSvg(source);
  node.setPluginData('svgHash', hashCode(source));
  return node;
};

type SvgNodeProps = any;

export default node => (props: SvgNodeProps) => {
  let frameNode = node || props.node || createNodeFromSvg(props.source);

  const savedHash = safeGetPluginData('svgHash')(frameNode);
  if (savedHash != hashCode(props.source)) {
      const newSvg = figma.createNodeFromSvg(props.source);
      layoutMixin(newSvg)(props);
      frameNode.children.forEach(child => child.remove());
      newSvg.children.forEach(child => {
          frameNode.appendChild(child);
      });
      newSvg.remove();
      node.setPluginData('svgHash', hashCode(props.source));
  }

  baseNodeMixin(frameNode)(props);
  layoutMixin(frameNode)(props);
  exportMixin(frameNode)(props);
  blendMixin(frameNode)(props);

  frameMixin(frameNode)(props);
  sceneNodeMixin(frameNode)(props);
  constraintsMixin(frameNode)(props);

  return frameNode;
};