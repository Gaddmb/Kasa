import React from "react"; // j'import react pour crée les composant react
import "./footer.scss"; // j'mport mon scss
import Logo from "../../assets/image/LOGO.png"; // j'import mon logo

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={Logo}
        alt="Kasa - agence de location d'appartements entre particuliers"
      />
      <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
