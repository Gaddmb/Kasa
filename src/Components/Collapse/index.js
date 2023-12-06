import React from "react";
import "./collapse.scss";
import { useState } from "react";
import arrow from "../../assets/image/arrow.png";

// je mets en paramtre title et content
const Collapse = ({ title, content }) => {
  // je gere l'etat de basculement avec un hook si ca bascule ou pas
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        {/* // l'or du clique ma fonction fléché et appeler  */}
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? "arrow arrow-down" : "arrow arrow-up"}
            src={arrow}
            alt="show content"
          />
        </h3>

        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {/* // je boucle sur mon tableau  */}
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
