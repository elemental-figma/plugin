import {
  baseNodeMixin,
  layoutMixin,
  exportMixin,
  constraintsMixin,
  autoLayoutMixin,
  sceneNodeMixin,
} from "../mixins";

type InstanceProps = any;

export default (node: InstanceNode) => (props: InstanceProps) => {
  const instanceNode = node || props.component.createInstance();

  baseNodeMixin(instanceNode)(props);
  layoutMixin(instanceNode)(props);
  exportMixin(instanceNode)(props);
  constraintsMixin(instanceNode)(props);
  autoLayoutMixin(instanceNode)(props);
  sceneNodeMixin(instanceNode)(props);

  if (props.detach) {
      instanceNode.detachInstance();
  }

  return instanceNode;
};
