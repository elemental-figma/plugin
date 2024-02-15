import { ExportProps } from '../types';

export default (node: ExportMixin) => (props: ExportProps) => {
    if (props.exportSettings) {
        node.exportSettings = props.exportSettings;
    } else {
        node.exportSettings = [];
    }
    if (props.exportAsyncCallback) {
        node.exportAsync(props.exportAsyncSettings).then(props.exportAsyncCallback);
    }
};
