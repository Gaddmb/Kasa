import React from "react";
import Banner from "../../Components/Banner";
import Gallery from "../../Components/Gallery";
import "./home.scss";

const Index = () => {
  return (
    <main>
      <div className="home">
        <Banner />
        <Gallery />
      </div>
    </main>
  );
};

export default Index;
