import React from "react";
// j'utilise la balise Link qui se comporte comme la balise anchor
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/image/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
