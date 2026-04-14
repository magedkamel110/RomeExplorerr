"use client"
import React from "react";

const Legal = (props) => {
  return (
    <div className="legal_container">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        class="absolute w-40 h-40 left-0 right-0 top-0 m-auto text-gray-200 z-0"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
      </svg>
      <div className="title">{props.title}</div>
      {props.sections.map((sec) => (
        <div className="section">
          <div className="heading">{sec.title}</div>
          <div className="content">{sec.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Legal;
