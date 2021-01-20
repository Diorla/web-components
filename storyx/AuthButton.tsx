import styled from "styled-components";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

export interface AuthButtonProps {
  type?: "google" | "facebook";
  [props: string]: any;
}

const StyledButton = styled.button`
  display: flex;
  border: none;
  padding: 0.8rem;
  width: 18rem;
  border-radius: 1.6rem;
  justify-content: space-around;
  outline: none;
  font-size: 1.6rem;
  cursor: pointer;
  border: 0.2rem solid;
  background: ${({ theme }) => theme.common.color};
  font-weight: bold;
  transition: ${({ theme }) => theme.duration.longest} linear;
`;

const StyledGoogle = styled(StyledButton)`
  color: #dc4e41;
  &:hover {
    background-color: #dc4e4116;
  }
  &:active {
    background-color: #dc4e4166;
  }
`;
const StyledFacebook = styled(StyledButton)`
  color: #3b5998;
  &:hover {
    background-color: #3b599816;
  }
  &:active {
    background-color: #3b599866;
  }
`;

const GoogleButton = ({ props }: { [props: string]: any }) => (
  <StyledGoogle {...props}>
    <FaGoogle />
    Google
  </StyledGoogle>
);
const FacebookButton = ({ props }: { [props: string]: any }) => (
  <StyledFacebook {...props}>
    <FaFacebookSquare />
    Facebook
  </StyledFacebook>
);

const AuthButton = ({ type, props }: AuthButtonProps) => {
  if (type === "google") return <GoogleButton {...props} />;
  return <FacebookButton {...props} />;
};

export default AuthButton;
