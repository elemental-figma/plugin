import {
  baseNodeMixin, 
  layoutMixin,
  exportMixin,
  blendMixin,
  autoLayoutMixin,
  frameMixin,
  sceneNodeMixin,
  publishableMixin,
} from '../mixins';

const createNewComponentSet = () => {
  const component = figma.createComponent();
  component.setPluginData('isComponentStubElement', 'true');
  return figma.combineAsVariants([component], figma.currentPage);
};

export default (node) => (props) => {
  const componentSetNode = node || props.node || createNewComponentSet();

  baseNodeMixin(componentSetNode)(props);
  layoutMixin(componentSetNode)(props);
  exportMixin(componentSetNode)(props);
  blendMixin(componentSetNode)(props);
  autoLayoutMixin(componentSetNode)(props);

  frameMixin(componentSetNode)(props);
  sceneNodeMixin(componentSetNode)(props);
  publishableMixin(componentSetNode)(props);

  return componentSetNode;
};