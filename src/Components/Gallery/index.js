import React from "react"; // j'import react pour crée les composant react
import "./gallery.scss"; // j'import mon scss pour le style
import data from "../../data/data.json"; // j'import mes données depuis le fichier data.json
import Card from "../Card/index"; // j'import card pour afficher les elements dans ma galerie

const Gallery = () => {
  return (
    <main className="main_gallery">
      {/* .map me permet de parcourir mes données en tableau en gros je boucle sur les données  */}
      {data.map((data) => {
        return (
          // ici je donne une propriétés unique props comme le titre l'id la couverture
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
};

export default Gallery;
