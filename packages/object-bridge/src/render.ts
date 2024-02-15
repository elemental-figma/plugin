import { pageMixin } from './mixins';
import renderers from './renderers';
import { SerializedPageNode } from './types/json';

type SerializedDocumentNode = {
  id: string,
  type: 'DOCUMENT',
  name: string,
  isAsset: boolean,
  detachedInfo: any,
  documentColorProfile: string,
  children: SerializedPageNode[],
  [key: string]: any, // FIXME:
}
type SerializedInstanceNode = {
  id: string,
  type: 'INSTANCE',
  name: string,
  // isAsset: boolean,
  // detachedInfo: any,
  // documentColorProfile: string,
  children: SerializedNode,
  [key: string]: any, // FIXME:
}
type SerializedGroupNode = {
  id: string,
  type: 'GROUP',
  [key: string]: any,
};
type SerializedBooleanOperation = {
  id: string,
  type: 'BOOLEAN_OPERATION',
  [key: string]: any,
};

type SerializedNode = SerializedDocumentNode | SerializedInstanceNode | SerializedGroupNode | SerializedBooleanOperation;


function traverseAndRenderNode(node, parentNode) {
  if (!renderers[node.type]) {
    console.log('!renderers[node.type]')
    return;
  }
  const newNode = renderers[node.type]()(node);
  console.log({ 'node.name': node.name, 'newNode.name': newNode.name })
  if (!newNode) {
    console.log('0', { newNode })
    return;
  }
  
  console.log({ 'newNode.name': newNode.name})
  // Append the frame to the parent node
  parentNode.appendChild(newNode);
  console.log('parentNode.appendChild', { 'parentNode.name': parentNode.name })

  // Recursively traverse children
  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      traverseAndRenderNode(child, newNode);
    }
  }
  return newNode;
}


export const renderJSONRootToFigma = async (data: SerializedDocumentNode) => {
  // console.log({ data })
  const document = figma.root;
  for (const serializedPage of data.children) {
    let page;
    const existingPage = document.findChild((child) => child.id === serializedPage.id);
    if (existingPage) {
      page = existingPage
    } else {
      const newPage = figma.createPage();
      document.appendChild(newPage);
    }

    // applyBaseProps(page, serializedPage);
    pageMixin(page)(serializedPage as any);

    for (const serializedChild of serializedPage.children) {
      console.log({ serializedChild })
      traverseAndRenderNode(serializedChild, page);
    }
  }
  console.log('traversed');
  return;
}