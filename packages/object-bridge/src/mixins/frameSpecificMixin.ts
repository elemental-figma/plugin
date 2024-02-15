import { propsAssign } from '../utils';
import { FrameSpecificProps } from '../types';

export default propsAssign<FrameSpecificProps, FrameSpecificProps>(
    ['clipsContent', 'guides', 'layoutGrids'],
    {
        clipsContent: false,
        guides: [],
        layoutGrids: []
    }
);
