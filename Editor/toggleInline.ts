import { EditorState, RichUtils } from "draft-js";

const toggleInline = (
  setEditorState: (arg: EditorState) => void,
  editorState: EditorState,
  style: string,
  editorRef: any
) => {
  setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  editorRef.current?.focus();
};

export default toggleInline;
