import {
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from "draft-js";
const { hasCommandModifier } = KeyBindingUtil;

function KeyBindFn(
  e: any,
  editorState: EditorState,
  setEditorState: (arg: EditorState) => void
) {
  // If Ctrl key is press
  if (hasCommandModifier(e)) {
    switch (e.key.toUpperCase()) {
      // If you click Ctrl + S => it will turn bold
      // Could use if for stuff like save file etc
      case "S":
        return "bold";
      case "`":
        return "code";
      default:
        return getDefaultKeyBinding(e);
    }
  } else if (e.key === "Tab") {
    const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
    if (newEditorState !== editorState) {
      setEditorState(newEditorState);
    }
    return null;
  }
  // Make sure default key code still works
  return getDefaultKeyBinding(e);
}

export default KeyBindFn;
