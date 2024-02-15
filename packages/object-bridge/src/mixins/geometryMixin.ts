import { GeometryProps } from '../types';
import { propsAssign } from '../utils';

export default propsAssign<GeometryProps, GeometryProps>(
    [
        'fills',
        'strokes',
        'strokeWeight',
        'strokeAlign',
        'strokeCap',
        'strokeJoin',
        'dashPattern',
        // 'fillStyleId',
        // 'strokeStyleId' FIXME:
    ],
    {
        fills: [],
        strokes: [],
        strokeWeight: 0,
        strokeAlign: 'INSIDE',
        strokeCap: 'NONE'
    }
);
