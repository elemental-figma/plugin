import { baseNodeMixin, exportMixin, pageMixin } from '../mixins';
import { PageProps } from '../types';

export default (node: PageNode) => (props: PageProps) => {
    const page = node || figma.createPage();

    baseNodeMixin(page)(props);
    exportMixin(page)(props);
    pageMixin(page as any)(props);

    return page;
};
