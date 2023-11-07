import React from "react"; // j'import react pour crée les composant react
import "./card.scss";
import { Link } from "react-router-dom";

// je mets en paramtres mes 3 proprietes
const Card = ({ title, cover, id }) => {
  return (
    // je crée un lien spécifique grace a l'id
    <Link to={`/house/${id}`} className="card_gallery">
      {/* grace a la propriete cover j'affiche image et le titre */}
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
