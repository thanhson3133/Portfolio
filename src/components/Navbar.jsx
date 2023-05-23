/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../assests/imgs/logo.png";
import searchIcon from "../assests/imgs/search.png";
const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="container flex justify-between items-center p-1">
        <div className="flex items-center gap-12">
          <img src={logo} style={{ height: "50px" }} />
          <ul className="flex gap-5 list-none">
            <li>Home</li>
            <li>Studio</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <img src={searchIcon} style={{ height: "20px" }} />
          <button className="w-24 font-medium p-1 bg-violet-500 border-none rounded cursor-pointer">
            Hire now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
