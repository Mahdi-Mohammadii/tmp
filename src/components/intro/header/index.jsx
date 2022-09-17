import React from "react";

const Menu = () => {
  return(
      <nav className="header__nav">
        <img src="/assets/logo.svg" alt="Logo" />
        <ul className="header__nav__ul">
          <li><a href="/">HOME</a></li>
          <li><a href="/">POPULAR</a></li>
          <li><a href="/">NEW COMER</a></li>
          <li><a href="/">ABOUT</a></li>
        </ul>
        <button className="header__nav__button">Login</button>
        <i className="fa fa-bars fa-2x header__nav__i"></i>
      </nav>
  )
};

export default Menu;
