// @ts-nocheck
import { baseNodeMixin, blendMixin, constraintsMixin, exportMixin, geometryMixin, layoutMixin, sceneNodeMixin } from "../mixins";
import { isEqualFontStyle, isValidSize, propsAssign } from "../utils";
import { DEFAULT_FONT } from "../utils/constants";

type TextProps = any; // FIXME:

const textNodePropsAssign = propsAssign<TextProps, TextProps>(
    [
        'characters',
        'textAlignHorizontal',
        'textAlignVertical',
        'paragraphIndent',
        'paragraphSpacing',
        'autoRename',
        'fontSize',
        'textCase',
        'textDecoration',
        'letterSpacing',
        'lineHeight',
        // 'textStyleId',
        'hyperlink'
    ],
    {
        characters: '',
        textAlignHorizontal: 'LEFT',
        textAlignVertical: 'TOP',
        paragraphIndent: 0,
        paragraphSpacing: 0,
        autoRename: false,
        fontSize: 12,
        textCase: 'ORIGINAL',
        textDecoration: 'NONE',
        letterSpacing: { value: 0, unit: 'PIXELS' },
        lineHeight: { unit: 'AUTO' },
        hyperlink: null
    }
);

const defaultFont = DEFAULT_FONT;

export default (node: TextNode) => (props: TextProps & { loadedFont?: FontName; hasDefinedWidth?: boolean } | any) => {
    const textNode = node || props.node || figma.createText();

    baseNodeMixin(textNode)(props);
    layoutMixin(textNode)(props);
    geometryMixin(textNode)(props);
    exportMixin(textNode)(props);
    blendMixin(textNode)(props);
    sceneNodeMixin(textNode)(props);
    constraintsMixin(textNode)(props);
    

    // figma.loadFontAsync(props.fontName as any)

    const { loadedFont, fontName = defaultFont } = props;
    // if (
    //     loadedFont &&
    //     fontName &&
    //     loadedFont.family === fontName.family &&
    //     isEqualFontStyle(loadedFont.style, fontName.style)
    // ) {
        if (fontName) {
            textNode.fontName = fontName;
        }
        if (
            isValidSize(props.width) &&
            isValidSize(textNode.height) &&
            !props.textAutoResize
        ) {
            textNode.resize(props.width, textNode.height);
            textNode.textAutoResize = 'HEIGHT';
        } else {
            textNode.textAutoResize = props.textAutoResize || 'WIDTH_AND_HEIGHT';
        }

        const oldCharacters = textNode.characters;
        const oldFontSize = textNode.fontSize;
        // textNodePropsAssign(textNode)(props);
        textNodePropsAssign(textNode)(props);
        if (oldCharacters !== textNode.characters || oldFontSize !== textNode.fontSize) {
            // const reactId = safeGetPluginData('reactId')(textNode);
            // if (reactId) {
            //     uiApi.updateYogaNode(reactId);
            // }
        }
    // }
    console.log('rendered textNode')

    return textNode;
};