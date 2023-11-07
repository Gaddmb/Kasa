import React from "react";
import data from "../../data/data.json";
import "./accommodation.scss";
import { useParams } from "react-router-dom";
import Carrousel from "../../Components/Carrousel/index";
import Collapse from "../../Components/Collapse/index";

const logement = () => {
  const { id } = useParams();

  const house = data.find((value) => value.id == id);

  return (
    <div>
      <Carrousel images={house.pictures} />
    </div>
  );
};
export default logement;
