import React from "react";
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

const Navbar = ({ bgColor, color, toggleButton, toggle }) => {
  const bgcolor = color == "black" ? "#cbc5c5" : "black";
  return (
    <>
      <div
        className="nav-bar"
        style={{
          backgroundColor: `${bgcolor}`,
        }}
      >
        <div
          className="logo"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          logo
          <div onClick={toggleButton}>
            {toggle ? BsToggle2Off(<BsToggle2On />) : <BsToggle2Off />}
          </div>
        </div>
        <div
          className="search"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          <div className="left">
            <FcSearch />{" "}
          </div>
          <div className="right">
            <IoFilter />
          </div>
        </div>
        <div
          className="seller"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}
        >
          seller
        </div>
      </div>
    </>
  );
};

export default Navbar;
