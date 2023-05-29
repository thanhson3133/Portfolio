import React from "react";
import { useEffect, useState } from "react";

import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
`;
const ScrollButton = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    console.log(1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button className="text-violet-500" onClick={scrollToTop}>
      <FaArrowCircleUp style={{ display: scrolled ? "inline" : "none" }} />
    </Button>
  );
};

export default ScrollButton;
