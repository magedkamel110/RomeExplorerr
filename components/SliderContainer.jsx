"use client"
import React from "react";
import Slider from "react-slick";
import SliderComponent from "./SliderComponent";
import { useGlobalContext } from "@/contexts/globalContext";
const SliderContainer = () => {
  const { tours } = useGlobalContext();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: (typeof window !== "undefined") ? parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--items-count")
        .trim()
    )
      ? parseInt(
          getComputedStyle(document.documentElement)
            .getPropertyValue("--items-count")
            .trim()
        )
      : 3 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {tours.map((tour) => (
          <div>
            <SliderComponent tour={tour} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderContainer;
