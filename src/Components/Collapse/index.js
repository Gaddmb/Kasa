import React from "react";
import "./collapse.scss";
import { useState } from "react"; // j'importe useState de react

const Collapse = ({ title, content }) => {
  // je crée 2 variable toggle pour stoker l'état de base actuel du composant
  // setToggle ma fonction pour mettre a jours ma variable
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* je crée une div qui englobe le contenu */}
      <div className="collapse">
        {/* j'ajoute un classe a mon titre ainsi qu'un evenement pour basculer l'état si il est true ou false */}
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
        </h3>
        {/* ensuite parti qui affiche le contenue de ma collapse  */}
        <div
          // j'ajoute une classe pour appliquer un style si toggle et true ou false
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
