import { BorderProps } from '../types';
import { propsAssign } from '../utils';

export default propsAssign<BorderProps, BorderProps>([
    'topLeftRadius',
    'topRightRadius',
    'bottomLeftRadius',
    'bottomRightRadius'
]);
