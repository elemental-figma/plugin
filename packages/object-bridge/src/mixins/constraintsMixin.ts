import { ConstraintsProps } from '../types';
import { propsAssign } from '../utils';

export default propsAssign<ConstraintsProps, ConstraintsProps>(['constraints'], {
    constraints: {
        horizontal: 'MIN',
        vertical: 'MIN'
    }
});
