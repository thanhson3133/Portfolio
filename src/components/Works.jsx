import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import ProductDesign from "./ProductDesign";
import Development from "./Development";
const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Container = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  -webkit-text-stroke: 1px white;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div
      id="works"
      className="h-screen snap-center flex justify-center relative font-light"
    >
      <Container className="container flex justify-between">
        <Left className="flex items-center" style={{ flex: 1 }}>
          <ul className="list-none flex flex-col gap-5">
            {data.map((item) => (
              <ListItem
                className="text-6xl font-bold cursor-pointer text-transparent relative"
                key={item}
                text={item}
                onClick={() => setWork(item)}
              >
                {item}
              </ListItem>
            ))}
          </ul>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </div>
  );
};

export default Works;
