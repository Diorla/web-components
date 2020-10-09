import { keyframes } from "styled-components";

export const show = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const hide = keyframes`
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
`;