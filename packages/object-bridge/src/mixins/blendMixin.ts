import { BlendProps } from '../types';
import { propsAssign } from '../utils';

export default propsAssign<BlendProps, BlendProps>(
    ['blendMode', 'effects', 'isMask', 'opacity'],
    {
        blendMode: 'NORMAL',
        effects: [],
        isMask: false,
        opacity: 1
    }
);
