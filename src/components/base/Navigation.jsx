import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import logo from "../../images/Lifterv4.png";

import Data from "../../data";


const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  const MenuItems = () => {
    return (
      <div className="NavBar_MenuItems">
        <ul>
          <li className="Navbar_links">
            <NavLink to="/" exact activeClassName="active-link" >Home</NavLink>
          </li>
          <li className="Navbar_links">
            <NavLink to="/courses" activeClassName="active-link" >Courses</NavLink>
          </li>
          <li className="Navbar_links">
            <NavLink to="/about" activeClassName="active-link" >About</NavLink>
          </li>
          <li className="Navbar_links">
            <NavLink to="/contact" activeClassName="active-link" >Contact</NavLink>
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
              <NavLink to="/" activeClassName="active-link" >Home</NavLink>
            </li>
            <div class="dropdown">
              <li>
                <NavLink to="/courses" activeClassName="active-link" >Courses</NavLink>
              </li>
              <div class="dropdown-content">
                {
                  Data.availableCourseTitles.map(course => (
                    <NavLink to={`/course/${course.id}`} activeClassName="active-link" >{ course.tittle }</NavLink>
                  ))
                }
              </div>
            </div>

            <li className="links">
              <NavLink to="/about" activeClassName="active-link" >About</NavLink>
            </li>
            <li className="links">
              <NavLink to="/contact" activeClassName="active-link" >Contact</NavLink>
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
          {MenuItems}
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
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
