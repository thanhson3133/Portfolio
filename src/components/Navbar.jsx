/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../assests/imgs/logo.png";
import searchIcon from "../assests/imgs/search.png";
import styled from "styled-components";
const Section = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const List = styled.ul`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Navbar = () => {
  return (
    <Section className="flex justify-center w-full">
      <Container className="container flex justify-between items-center p-1">
        <div className="flex items-center gap-12">
          <img src={logo} style={{ height: "50px" }} />
          <List className="flex gap-5 list-none">
            <li>Home</li>
            <li>Studio</li>
            <li>Works</li>
            <li>Contact</li>
          </List>
        </div>
        <div className="flex items-center gap-5">
          <img src={searchIcon} style={{ height: "20px" }} />
          <button className="w-24 font-medium p-1 bg-violet-500 border-none rounded cursor-pointer">
            Hire now
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Navbar;
