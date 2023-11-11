import React from "react";
import "./collapse.scss";
import { useState } from "react"; // j'importe useState de react
import arrowUpImage from "../../assets/image/arrow-up.png";

const Collapse = ({ title, content }) => {
  // je crée 2 variable toggle pour stoker l'état de base actuel du composant
  // setToggle ma fonction pour mettre a jours ma variable
  const [toggle, setToggle] = useState(false);
  const arrowClass = toggle ? "arrow-up-image rotated" : "arrow-up-image";
  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          {/* Add the arrow-up.png image here */}
          <img src={arrowUpImage} alt="Arrow Up" className="arrow-up-image" />
        </h3>
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {/* je verifie si content est un tableau si oui je parcours le tableau avec map */}
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>
  );
};

export default Collapse;
