import { SceneNodeProps } from '../types';
import { propsAssign } from '../utils';

export default propsAssign<SceneNodeProps, SceneNodeProps>(['visible', 'locked'], {
    visible: true,
    locked: false
});
