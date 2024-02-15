import { propsAssign } from '../utils';
import { FrameProps } from '../types';

export default propsAssign<FrameProps, FrameProps>(['backgrounds'], {
    backgrounds: []
});
