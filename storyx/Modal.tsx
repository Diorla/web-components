import styled from "styled-components";
import variants from "./variants";

export interface ModalProps {
  children?: React.ReactNode;
  variant: variants;
}
const Box = styled.div<ModalProps>`
  background-color: ${({ theme }) => theme.common.color}f2;
  min-height: 320px;
  width: 80%;
  min-width: 320px;
  max-width: 640px;
  border-top: 4px solid ${({ theme, variant }) => theme[variant].color};
  display: flex;
  justify-content: space-around;
`;

const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.common.inverseColor}80;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
`;

const Modal = ({ children, variant = "primary" }: ModalProps) => {
  return (
    <StyledModal>
      <Box variant={variant}>{children}</Box>
    </StyledModal>
  );
};

export default Modal;
