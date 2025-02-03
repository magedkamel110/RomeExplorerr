"use client";
import React from "react";
import Link from "next/link";
import Hearts from "./Hearts";
import TopExtention from "./TopExtention";
const TourPhone = (props) => {
  return (
    <Link
      target="_blank"
      href={`/tour/${props.tour._id}`}
      key={props.id}
      className="tour_container_phone"
    >
      <TopExtention classnames="red large" content="LIKELY TO SELL OUT" />
      <img src={props.tour.external_ui.main_image} alt="main image" />
      <div className="heading">{props.tour.external_ui.title}</div>
      <div className="section1">
        <div className="hearts_container">
          <Hearts count={props.tour.external_ui.stars} />
        </div>
        <div className="rating">({props.tour.external_ui.rating})</div>
      </div>
      <div className="content">
        {props.tour.external_ui.introduction
          .split(" ")
          .slice(0, 60)
          .reduce((p, c) => `${p} ${c}`, "")}
        {props.tour.external_ui.introduction.split(" ").length > 60
          ? "\t....."
          : ""}
      </div>
      <div className="price_container">
        <span
          style={{
            padding: 0,
            margin: 0,
            fontFamily: "Tangerine, serif",
            fontWeight: "700",
          }}
        >
          from
        </span>{" "}
        <p style={{ fontSize: "12px", color: "black" }}>€</p>
        <div className="price">{props.tour.external_ui.price}</div>
      </div>
    </Link>
  );
};

export default TourPhone;
