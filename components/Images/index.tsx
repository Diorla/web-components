import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
from {
  -webkit-transform: scale(0);
}
to {
  -webkit-transform: scale(1);
}
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  border: 1px solid silver;
`;

const StyledTop = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled.img`
  cursor: pointer;
  transition: 0.3s;
  height: 300px;
  margin-top: 4px;
  box-shadow: 0 0 4px -2px silver;
  padding: 2px;
  &:hover {
    opacity: 0.7;
  }
`;

const StyledMiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledModal = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  & > img {
    margin: auto;
    display: block;
    width: auto;
    height: 80%;
    animation: 0.6s ${modalAnimation};
    cursor: default;
    &:hover {
      opacity: 1;
    }
  }
`;

const StyledClose = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

const StyledCaption = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
  animation: 0.6s ${modalAnimation};
`;

const Img = ({ src, onClick }: { src: string; onClick?: (e: any) => void }) => (
  <StyledImage src={src} alt="sample image" onClick={onClick} />
);

export default () => {
  const [index, setIndex] = useState<number>(undefined);
  const [visible, setVisible] = useState(false);
  const arr = [
    "http://lorempixel.com/300/300/abstract",
    "http://lorempixel.com/300/300/city",
    "http://lorempixel.com/300/300/animals",
    "http://lorempixel.com/300/300/business",
    "http://lorempixel.com/300/300/cats",
    "http://lorempixel.com/300/300/food",
    "http://lorempixel.com/300/300/nightlife",
    "http://lorempixel.com/300/300/fashion",
    "http://lorempixel.com/300/300/people",
    "http://lorempixel.com/300/300/nature",
    "http://lorempixel.com/300/300/sports",
    "http://lorempixel.com/300/300/technics",
    "http://lorempixel.com/300/300/transport",
  ];
  return (
    <StyledMain>
      <span>&times;</span>
      <StyledTop>Top</StyledTop>
      <StyledMiddle>
        {arr.map((item, idx) => (
          <Img
            src={item}
            key={idx}
            onClick={() => {
              setIndex(idx);
              setVisible(true);
            }}
          />
        ))}
      </StyledMiddle>
      <StyledModal visible={visible}>
        <StyledClose onClick={() => setVisible(false)}>&times;</StyledClose>
        <Img src={arr[index]} />
        <StyledCaption id="caption">
          {arr[index] && arr[index].split("/").slice(-1)[0]}
        </StyledCaption>
      </StyledModal>
    </StyledMain>
  );
};
