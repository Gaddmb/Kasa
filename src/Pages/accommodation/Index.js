import React from "react";
import data from "../../data/data.json";
import { useState, useEffect } from "react";
import "./accommodation.scss";
import { useParams } from "react-router";
import Carrousel from "../../Components/Carrousel/index";
import Collapse from "../../Components/Collapse/index";
import StarRating from "../../Components/stars/index";
import NotFound from "../notFound/Index";

const Logement = () => {
  const { id } = useParams();

  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundLogement = data.find((log) => log.id === id);

    setTimeout(() => {
      setLogement(foundLogement);
      setLoading(false);
    }, 1300);
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        <p>Chargement...</p>
      </div>
    );
  }

  if (!logement) {
    return (
      <div>
        <NotFound />
      </div>
    );
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
            <StarRating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="logement-collapse">
        <Collapse
          className="collapse"
          title={`Description`}
          content={logement.description}
        />
        <Collapse
          className="collapse"
          title={`Equipements`}
          content={logement.equipments}
        />
      </div>
    </section>
  );
};

export default Logement;
