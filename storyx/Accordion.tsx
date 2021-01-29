import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;

const slideUp = keyframes`
  from {
    transform: scaleY(1);
  }

  to {
    transform: scaleY(0);
  }
`;

export interface AccordionProps {
  /**
   * The part is always visible, used for toggling
   */
  title: string;
  /**
   * The content is may be hidden
   */
  children: React.ReactNode;
  /**
   * initial state, whether it is open or closed
   */
  expanded?: boolean;
}

const Control = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.div<{ expanded: boolean; loaded: boolean }>`
  transform-origin: top;
  animation: ${({ expanded }) => (expanded ? slideDown : slideUp)}
    ${({ theme, loaded }) => loaded && theme.duration.standard} linear forwards;
`;
const Accordion = ({ title, children, expanded = false }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setIsExpanded(expanded);
  }, []);
  return (
    <div>
      <Control
        onClick={() => {
          setIsExpanded(!isExpanded);
          setLoaded(true);
        }}
      >
        {title}
        {isExpanded ? <FaAngleRight /> : <FaAngleDown />}
      </Control>
      <Wrapper expanded={isExpanded} loaded={loaded}>
        {children}
      </Wrapper>
    </div>
  );
};

export default Accordion;
