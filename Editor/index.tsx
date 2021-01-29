import React, { useEffect, useRef, useState } from "react";
import { Editor as DraftEditor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import handleKeyCommand from "./handleKeyCommand";
import KeyBindFn from "./keyBindFn";
import toggleInline from "./toggleInline";
import Toolbar from "./Toolbar";
import INLINE_STYLES from "./INLINE_STYLES";
import BLOCK_TYPES from "./BLOCK_TYPES";
import toggleBlockType from "./toggleBlock";
import Button from "./Button";
import styled from "styled-components";

const StyledDiv = styled.div<{ hasStyle: boolean }>`
  & .public-DraftEditorPlaceholder-hasFocus {
    color: ${({ hasStyle }) => (hasStyle ? "transparent" : "silver")};
  }
  font-size: 1.4rem;
  border: 1px solid silver;
  min-height: 200px;
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  blockquote {
    margin: 0.4rem;
  }
  & h1 {
    font-size: 3rem;
  }
  & h2 {
    font-size: 2.6rem;
  }
  & h3 {
    font-size: 2.2rem;
  }
  & h4 {
    font-size: 1.8rem;
  }
  & h5 {
    font-size: 1.4rem;
  }
  & h6 {
    font-size: 1.2rem;
  }
  & pre {
    font-family: "Fira Code", monospace;
  }
  & blockquote {
    padding: 0.2rem;
    border-left: 0.2rem solid ${({ theme }) => theme.secondary.color};
    background-color: ${({ theme }) => theme.secondary.color}0a;
  }
`;

const Editor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const editorRef = useRef<null | DraftEditor>(null);
  useEffect(() => {
    editorRef.current?.focus();
  });
  const onKeyCommand = (command: string, editorState: EditorState) =>
    handleKeyCommand(command, editorState, setEditorState);
  const onKeyBindFn = (e: any) => KeyBindFn(e, editorState, setEditorState);
  const currentStyle = editorState.getCurrentInlineStyle();
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const contentState = editorState.getCurrentContent();
  let hasStyle = false;
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      hasStyle = true;
    }
  }

  return (
    <StyledDiv hasStyle={hasStyle}>
      <Toolbar>
        {INLINE_STYLES.map((type, idx) => (
          <Button
            key={idx}
            onClick={(e: any) => {
              toggleInline(setEditorState, editorState, type.style, editorRef);
              e.preventDefault();
            }}
            active={currentStyle.has(type.style)}
            icon={type.label}
          />
        ))}
        {BLOCK_TYPES.map((type, idx) => (
          <Button
            key={idx}
            onClick={(e) => {
              toggleBlockType(
                setEditorState,
                editorState,
                type.style,
                editorRef
              );
              e.preventDefault();
            }}
            active={type.style === blockType}
            icon={type.label}
          />
        ))}
      </Toolbar>
      <DraftEditor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Type here..."
        handleKeyCommand={onKeyCommand}
        keyBindingFn={onKeyBindFn}
        ref={editorRef}
        spellCheck={true}
      />
    </StyledDiv>
  );
};

export default Editor;
