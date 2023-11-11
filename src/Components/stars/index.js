import React from "react";
import StarFull from "../../assets/image/etoilePleine.png";
import StarEmpty from "../../assets/image/etoileVide.png";
import "./stars.scss";

const StarRating = ({ rating }) => {
  const starArray = [];

  // boucle en fonction de la note
  for (let i = 1; i <= 5; i++) {
    starArray.push(
      <i key={i}>
        {i <= rating ? (
          <img className="starFull" src={StarFull} alt="étoile pleine" />
        ) : (
          <img className="starEmpty" src={StarEmpty} alt="étoile vide" />
        )}
      </i>
    );
  }

  return <span>{starArray}</span>;
};

export default StarRating;
