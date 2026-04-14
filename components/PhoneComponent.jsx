"use client"
import React from "react";

const PhoneComponent = () => {
  const content = [
    {
      title: "Book Tour",
      content: "quick and easy confirmation",
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-black/80 css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="BookOnlineIcon"
        >
          <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 18V6h10v12H7zm9-7V9.14C16 8.51 15.55 8 15 8H9c-.55 0-1 .51-1 1.14v1.96c.55 0 1 .45 1 1s-.45 1-1 1v1.76c0 .63.45 1.14 1 1.14h6c.55 0 1-.51 1-1.14V13c-.55 0-1-.45-1-1s.45-1 1-1zm-3.5 3.5h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1z"></path>
        </svg>
      ),
    },
    {
      title: "Arrive",
      content: "15-30 minutes before departure",
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-black/80 css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PlaceIcon"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        </svg>
      ),
    },
    {
      title: "Enjoy",
      content: "get checked in with our tour coordinator, then meet your Guide",
      svg: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-blue-600 css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ThumbUpSharpIcon"
        >
          <path d="M14.17 1 7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z"></path>
        </svg>
      ),
    },
  ];
  return (
    <div className="phone_component_container">
      <img src="/phone_cover.webp" alt="phone cover" className="phone_cover" />
      <img className="img0" src="/phone_header_0.svg" alt="" />
      <div className="allcontent">
        <img className="img1" src="/phone_header_1.webp" alt="" />
        <img className="img2" src="/phone_header_2.webp" alt="" />

        {content.map((v) => (
          <div className="section">
            <div className="title">{v.title}</div>
            <div className="content">{v.content}</div>
            {v.svg}
          </div>
        ))}

        <img className="img3" src="/phone_header_3.webp" alt="" />
        <img className="img4" src="/phone_header_4.webp" alt="" />
      </div>
    </div>
  );
};

export default PhoneComponent;
