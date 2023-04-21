import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { Link } from "react-router-dom"; remove Link and use window.location instead
import { sliderData } from "./Slider-data";
import "./Slider.css";

const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  // function to send user screen to PlantList
  const snapTo = () => {
    // get position of PlantList.js component
    const plantListPosition = document
      .getElementsByClassName("toggle-container")[0]
      .getBoundingClientRect().top;
    // snap to position of PlantList.js
    window.scrollTo({
      top: window.pageYOffset + plantListPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  // handle button clicks
  const handleClick = (btnUrl) => {
    if (btnUrl === "indoorToggle") {
      props.setIndoor(true);
      snapTo();
    } else if (btnUrl === "outdoorToggle") {
      props.setIndoor(false);
      snapTo();
    } else {
      window.location.href = btnUrl;
    }
  };

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <hr />
                  <button
                    className="header-btn"
                    onClick={() => handleClick(slide.btnUrl)}
                  >
                    {slide.btnTitle}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
