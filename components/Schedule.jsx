"use client"
import React from "react";
import TopExtention from "./TopExtention";

function Schedule({ title, date, classnames }) {
  return (
    <div className={`schedule ${classnames}`}>
      <TopExtention content="starting from 120€" classnames="blue" />
      <div className="title">{title}</div>
      <div className="date">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
        </svg>
        <div>{date}</div>
      </div>
      <a href="#bookeo-widget-container" className="avalability_btn">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mb-1 text-[10px] css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="CalendarMonthOutlinedIcon"
        >
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
        </svg>
        <div>Check Avalibility</div>
      </a>
    </div>
  );
}

export default Schedule;
