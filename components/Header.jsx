"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
export const Header = () => {
  const header_toggle_ref = useRef(null);
  const section_2_ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      console.log("clicked");
      let old_class_name = section_2_ref.current.className;
      if (old_class_name.includes("phone")) {
        section_2_ref.current.className = "section_2";
      } else {
        section_2_ref.current.className = "section_2 phone";
      }
      console.log(section_2_ref.current.className);
    };

    // Attach the event listener
    const element = header_toggle_ref.current;
    if (element) {
      element.addEventListener("click", handleClick);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (element) {
        console.log("removing the event listneer");
        element.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <div className="header">
      <Link href="/" className="section_1">
        <section className="logo_container">
          <img src="/main_logo.png" alt="Main Logo" />
        </section>
        <section
          onClick={() => {
            sessionStorage.setItem("reload_status", "0");
          }}
          className="heading"
        >
          <div>Rome Explorers</div>
          <div className="heading_inner_text">Easy to book, Free to cancel</div>
        </section>
      </Link>
      <section ref={section_2_ref} className="section_2">
        <a href="#tours">Tours</a>
        <Link href="/contact">Contact</Link>
      </section>
      <section ref={header_toggle_ref} className="section_2_phone">
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1in44b7"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MenuIcon"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </section>
    </div>
  );
};
