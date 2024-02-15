import { propsAssign } from '../utils';
import { PublishableProps } from '../types';

export default propsAssign<PublishableProps, PublishableProps>(['description', 'documentationLinks'], {
    description: '',
    documentationLinks: []
});
