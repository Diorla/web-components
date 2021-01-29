import { EditorState, RichUtils } from "draft-js";

/**
 * Used to listen to key press and update when necessary
 * @param command key command e.g. Ctrl B for bold
 * @param editorState the editor state that is being updated
 * @param setEditorState callback used to update the current
 * @see https://draftjs.org/docs/advanced-topics-key-bindings/
 */
const handleKeyCommand = (
  command: string,
  editorState: EditorState,
  setEditorState: (arg: EditorState) => void
) => {
  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState) {
    setEditorState(newState);
    return "handled";
  }

  return "not-handled";
};

export default handleKeyCommand;
