import React from "react"; // import de la bibliotheque react
import "./about.scss";
import Banner from "../../Components/Banner";
import Collapse from "../../Components/Collapse";
import AboutData from "./AboutData"; // j'importe mes données

const index = () => {
  return (
    <div className="about">
      <Banner />
      <main className="about_main">
        {/* je parcours mes données grace a la fonction map  */}
        {AboutData.map((data) => {
          return (
            // je fais key=data.id pour rendre unique chaque element
            <div className="about_main_collapse" key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default index;
