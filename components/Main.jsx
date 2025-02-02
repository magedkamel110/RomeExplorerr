"use client";
import Navbar from "./Navbar";
import Tour from "./Tour";
import TourPhone from "./TourPhone";
import { useEffect, useContext } from "react";
import { useGlobalContext } from "@/contexts/globalContext";
import PhoneComponent from "./PhoneComponent";

export const Main = (props) => {
  const { filtered_tours, set_filtered_tours, set_tours, tours } =
    useGlobalContext();
  useEffect(() => {
    set_filtered_tours(props.tours);
    set_tours(props.tours);
    console.log({ filtered_tours });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="header_part_1_flag"></div>
      <div className="header_part_2">
        <img src="/header_1_img.avif" alt="" />
        <div className="header_text">
          Experience Rome with
          <div className="header_text_inner">Rome Explorers</div>
        </div>
      </div>
      <div className="header_part_3">
        <img className="first" src="/header_container_left.svg" alt="" />
        <img src="/header_img_1.gif" alt="" />
        <img src="/header_img_2.webp" alt="" />
        <img src="/header_img_3.webp" alt="" />
        <img src="/header_img_4.webp" alt="" />
        <img className="last" src="/header_container_right.svg" alt="" />
      </div>
      <div className="header_part_4">
        <div>Discover Rome with the best in the business</div>
      </div>
      <div className="global_heading">
        <div className="heading">Our Most Popular Tours </div>
        <div>Crafted with over a decade of experience</div>
      </div>
      {tours.slice(0, 4).map((tour, i) => (
        <>
          <Tour
            set_filtered_tours={set_filtered_tours}
            tour={tour}
            id={i}
            key={i}
          />
          <TourPhone
            set_filtered_tours={set_filtered_tours}
            tour={tour}
            id={i}
            key={i}
          />
        </>
      ))}
      <div className="global_heading">
        <div className="heading">Touring is easy </div>
        <div>3 steps and you're set</div>
      </div>
      <PhoneComponent />
      <div className="global_heading">
        <div className="heading">Our Complete Tour Collection</div>
        <div>Curated Experiences for Every Taste and Interest</div>
      </div>
      <div id="tours"></div>
      {filtered_tours.map((tour, i) => (
        <>
          <Tour
            set_filtered_tours={set_filtered_tours}
            tour={tour}
            id={i}
            key={i}
          />
          <TourPhone
            set_filtered_tours={set_filtered_tours}
            tour={tour}
            id={i}
            key={i}
          />
        </>
      ))}
      <Navbar></Navbar>
      <div className="global_heading">
        <div className="heading">Why book with Rome Explorers?</div>
        <div>Don't take it from us - See what our customers have to say</div>
      </div>
    </>
  );
};
