import React from "react";
import StarFull from "../../assets/image/etoilePleine.png";
import StarEmpty from "../../assets/image/etoileVide.png";
import "./stars.scss";

// je mets en paramtre rating represente la note
const StarRating = ({ rating }) => {
  const starArray = [];

  // boucle en fonction de la note un tableau est crée
  //je genere les elements i avec une boucle for
  // pour chaque itériation si c'est inferieur ou égale a la note une etoile et rendu
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
