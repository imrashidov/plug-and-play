import { useState } from "react";
import SliderData from "../data/SliderData";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === SliderData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? SliderData.length - 1 : prevSlide - 1
    );
  };
  return (
    <section id="slider">
      <div className="slider-main">
        <div className="slider-buttons">
          <button
            className="slider-buttons__left"
            onClick={handlePreviousSlide}
          >
            <FaChevronLeft />
          </button>
          <button className="slider-buttons__right" onClick={handleNextSlide}>
            <FaChevronRight />
          </button>
        </div>
        {SliderData.map((slide, index) => (
          <img
            src={slide.img}
            key={slide.id}
            alt="Slider Photo"
            className={currentSlide === index ? "slider-image" : "hidden"}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
