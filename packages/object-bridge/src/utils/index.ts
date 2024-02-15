// https://github.com/react-figma/react-figma/blob/master/src/helpers/propsAssign.ts
// LICENSE: MIT License

export const propsAssign = <T, D extends T>(fields: (keyof T)[], defaultValues?: D) => <N extends T>(node: N) => <
    P extends T
>(
    props: P
) => {
    fields.forEach(field => {
        if (props[field] !== undefined) {
            node[field] = props[field] as any; // same type is assumed
        } else if (defaultValues && defaultValues[field] !== undefined) {
            node[field] = defaultValues[field] as any;
        }
    });
};

export const isValidSize = (size?: number) => {
  return size && size >= 0.01;
};

export const isEqualFontStyle = (style1: string, style2: string) => {
  const style1Normalized = style1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const style2Normalized = style2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return style1Normalized === style2Normalized;
};

export const hashCode = str => {
  var hash = 0,
      i,
      chr;
  if (str.length === 0) return '' + hash;
  for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return '' + hash;
};

export const safeGetPluginData = (key: string) => (node: BaseNodeMixin | undefined): string | void => {
  if (!node || node.removed || !node.getPluginData) {
      return;
  }
  return node.getPluginData(key);
};
