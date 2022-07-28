import React, { useState } from "react";
// import styled from "styled-components";
import logo from "../../images/Lifterv4.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const MenuItems = () => {
    return (
      <div className="NavBar_MenuItems">
        <ul>
          <li className="Navbar_links">
            <a href="/">Home</a>
          </li>
          <li className="Navbar_links">
            <a href="/">Courses</a>
          </li>
          <li className="Navbar_links">
            <a href="/">About</a>
          </li>
          <li className="Navbar_links">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="NavBar">
        <div className="NavBar_Logo">
          <img src={logo} alt="logo"></img>
          <span className="LogoName">Lifter</span>
        </div>

        <div className="NavBar_Links">
          <ul>
            <li className="links">
              <a href="/">Home</a>
            </li>
            <div class="dropdown">
              <li>
                <a href="/">Courses</a>
              </li>
              <div class="dropdown-content">
                <a href="#">Java Development</a>
                <a href="#">Web Development</a>
                <a href="#">Automation</a>
              </div>
            </div>

            <li className="links">
              <a href="/">About</a>
            </li>
            <li className="links">
              <a href="/">Contact</a>
            </li>
            <li className="Navbar_links">
              <p>
                sbaaala@gmail.com
                <br />
                +91 90952 05004
              </p>
            </li>
          </ul>
        </div>
        <div className="menu_icon">
          {isNavOpen ? (
            ({ MenuItems }, (<MdClose onClick={() => setIsNavOpen(false)} />))
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Navigation;
