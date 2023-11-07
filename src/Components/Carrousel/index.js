import React, { useState } from "react";
import "./Carrousel.scss";
import ArrowRight from "../../assets/image/arrow_right.png";
import ArrowLeft from "../../assets/image/arrow_left.png";

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // je gere l'etat

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((pictures, index) => (
            <div className="carousel-item" key={index}>
              <img src={pictures} alt={"images hebergement"} />
            </div>
          ))}
        </div>

        <div>
          <button className="carrousel-btn prev" onClick={prevSlide}>
            <img src={ArrowLeft} alt="arrowLeft" />
          </button>
          <button className="carrousel-btn next" onClick={nextSlide}>
            <img src={ArrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
