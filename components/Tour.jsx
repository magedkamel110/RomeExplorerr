"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopExtention from "./TopExtention";
import Hearts from "./Hearts";

const Tour = (props) => {
  return (
    <Link
      target="_blank"
      href={`/tour/${props.tour._id}`}
      key={props.id}
      className="tour_container"
    >
      <div className="section1">
        <TopExtention classnames="red large" content="LIKELY TO SELL OUT" />
        {props.tour.external_ui.main_image.includes("www.toursofrome.info") ? (
          <Image
            src={props.tour.external_ui.main_image}
            alt="main image"
            width={500} // Adjust dimensions as needed
            height={300}
            priority // Optional: Loads the image faster
          />
        ) : (
          <img src={props.tour.external_ui.main_image} alt="" />
        )}
        <div className="extention_container">
          <div className="extention">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-57kesc"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="AccessTimeIcon"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
            <div>{props.tour.external_ui.hours} hours</div>
          </div>
          <div className="extention">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-57kesc"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckIcon"
            >
              <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
            </svg>
            <div>{props.tour.external_ui.bonus}</div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="heading">{props.tour.external_ui.title}</div>
        <div className="content">{props.tour.external_ui.introduction}</div>
        <div className="stars">
          <Hearts count={props.tour.external_ui.stars} />
          <div>({props.tour.external_ui.rating})</div>
        </div>
      </div>
      <div className="section3">
        <p style={{ fontFamily: "Tangerine, serif", fontWeight: "700" }}>
          from
        </p>
        €<p className="price">{props.tour.external_ui.price}</p>
      </div>
    </Link>
  );
};

export default Tour;
