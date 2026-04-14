"use client";
import React from "react";
import Hearts from "./Hearts";
import Link from "next/link";

const SliderComponent = (props) => {
  return (
    <Link
      href={`/tour/${props.tour._id}`}
      target="_blank"
      className="slider_component_container"
    >
      <img
        className="img_container"
        src={props.tour.external_ui.main_image}
        alt=""
      />
      <div className="main_section">
        <div className="title">{props.tour.external_ui.title}</div>
        <div className="content">
          {props.tour.external_ui.introduction
            .split(" ")
            .slice(0, 40)
            .reduce((p, c) => `${p} ${c}`, "")}
        </div>
        <div className="section2">
          <div className="price_container">
            <div>from</div>
            <div className="sign">€</div>
            <div className="price">{props.tour.external_ui.price}</div>
          </div>
          <Hearts count={props.tour.external_ui.stars} />
        </div>
      </div>
    </Link>
  );
};

export default SliderComponent;
