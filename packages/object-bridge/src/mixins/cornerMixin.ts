import { CornerProps } from '../types';
import { propsAssign } from '../utils';

export default propsAssign<CornerProps, CornerProps>(['cornerRadius', 'cornerSmoothing'], {
    cornerRadius: 0,
    cornerSmoothing: 0
});
