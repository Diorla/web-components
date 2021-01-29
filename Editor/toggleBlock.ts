import { EditorState, RichUtils } from "draft-js";

const toggleBlockType = (
  setEditorState: (arg: EditorState) => void,
  editorState: EditorState,
  blockType: string,
  editorRef: any
) => {
  setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  editorRef.current?.focus();
};

export default toggleBlockType;
