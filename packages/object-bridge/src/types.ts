export interface BaseNodeProps {
  name?: string;
  pluginData?: {
      [key: string]: string;
  };
  sharedPluginData?: {
      [namespace: string]: {
          [key: string]: string;
      };
  };
  onNodeId?: (nodeId: string) => void;
}

export interface LayoutProps {
  relativeTransform?: Transform;
  x?: number;
  y?: number;
  rotation?: number;
  width?: number;
  height?: number;
  isWithoutConstraints?: boolean;
  layoutAlign?: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT';
  layoutGrow?: number;
}

export interface ConstraintsProps {
  constraints?: Constraints;
}

export interface CornerProps {
  cornerRadius?: number | symbol;
  cornerSmoothing?: number;
}

export interface BorderProps {
  topLeftRadius?: number;
  topRightRadius?: number;
  bottomLeftRadius?: number;
  bottomRightRadius?: number;
}

export interface ExportProps {
  exportSettings?: ReadonlyArray<ExportSettings>;
  exportAsyncSettings?: ExportSettings;
  exportAsyncCallback?: (result: Uint8Array) => any;
}

export interface FrameProps {
  backgrounds?: ReadonlyArray<Paint>;
  fillStyleId?: string | symbol;
}

export interface FrameSpecificProps {
  clipsContent?: boolean;
  guides?: ReadonlyArray<Guide>;
  layoutGrids?: ReadonlyArray<LayoutGrid>;
  gridStyleId?: string;
}

export interface GeometryProps {
  fills?: ReadonlyArray<Paint> | symbol;
  strokes?: ReadonlyArray<Paint>;
  strokeWeight?: number | PluginAPI['mixed'];
  strokeAlign?: 'CENTER' | 'INSIDE' | 'OUTSIDE';
  strokeCap?: StrokeCap | symbol;
  strokeJoin?: StrokeJoin | symbol;
  dashPattern?: ReadonlyArray<number>;
  fillStyleId?: string | symbol;
  strokeStyleId?: string;
}

export interface ChildrenProps {
  children?: SceneNode;
}

export interface PageProps extends BaseNodeProps, ChildrenProps, ExportProps {
  // style?: StyleOf<YogaStyleProperties & GeometryStyleProperties>;
  isCurrent?: boolean;
  onCurrentChange?: (isCurrent: boolean) => void;
  backgrounds?: ReadonlyArray<Paint>;
}

export interface SceneNodeProps {
  visible?: boolean;
  locked?: boolean;
}

export interface AutoLayoutProps {
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';
  primaryAxisSizingMode?: 'FIXED' | 'AUTO';
  counterAxisSizingMode?: 'FIXED' | 'AUTO';

  primaryAxisAlignItems?: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN';
  counterAxisAlignItems?: 'MIN' | 'MAX' | 'CENTER';

  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;

  horizontalPadding?: number; // DEPRECATED
  verticalPadding?: number; // DEPRECATED
  itemSpacing?: number;
}

export interface BlendProps {
  opacity?: number;
  blendMode?: 'PASS_THROUGH' | BlendMode;
  isMask?: boolean;
  effects?: ReadonlyArray<Effect>;
  effectStyleId?: string;
}

export interface PublishableProps {
  description?: string;
  documentationLinks?: ReadonlyArray<DocumentationLink>;
}
