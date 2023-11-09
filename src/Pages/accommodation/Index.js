import React from "react";
import data from "../../data/data.json";
import { useState, useEffect } from "react";
import "./accommodation.scss";
import { useParams } from "react-router";
import Carrousel from "../../Components/Carrousel/index";
import Collapse from "../../Components/Collapse/index";
import StarFull from "../../assets/image/etoilePleine.png";
import StarEmpty from "../../assets/image/etoileVide.png";
import NotFound from "../notFound/Index";

const Logement = () => {
  const { id } = useParams();

  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // je chercher le logement qui correspond id
    const foundLogement = data.find((log) => log.id === id);

    // fonction pour simuler le chargement

    setTimeout(() => {
      setLogement(foundLogement);
      setLoading(false);
    }, 1300);
  }, [id]);

  // j'affiche chargement si le elle est en cours
  if (loading) {
    return (
      <div className="loader-container">
        <p>Chargement...</p>
      </div>
    );
  }

  // sinon ca affiche la page NotFound

  if (!logement) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  //pour generer les etoiles de notations
  function generateStarRating(rating) {
    const starArray = [];

    // je crée une boucle qui depend de la note
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starArray.push(
          <i key={i} className="starFull">
            <img src={StarFull} alt="étoile pleine" />
          </i>
        );
      } else {
        starArray.push(
          <i key={i} className="starEmpty">
            <img src={StarEmpty} alt="étoile vide" />
          </i>
        );
      }
    }
    return starArray;
  }

  return (
    <section className="logement-container">
      <div className="carrousel-container">
        <Carrousel images={logement.pictures} />
      </div>
      <div className="hebergement-container">
        <div className="hebergement-title">
          <h2>{logement.title}</h2>
          <h4>{logement.location}</h4>
          <div className="logement-tags">
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="logement-hostRating">
          <div className="logement-host">
            {logement.host.name}
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">
            <span>{generateStarRating(logement.rating)}</span>
          </div>
        </div>
      </div>
      <div className="logement-collapse">
        <Collapse title={`Description`} content={logement.description} />
        <Collapse title={`Equipements`} content={logement.equipments} />
      </div>
    </section>
  );
};

export default Logement;
