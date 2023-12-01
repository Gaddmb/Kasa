import React from "react";
import "./collapse.scss";
import { useState } from "react";
import arrow from "../../assets/image/arrow.png";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? "arrow arrow-up" : "arrow arrow-down"}
            src={arrow}
            alt="show content"
          />
        </h3>

        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
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
