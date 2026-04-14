"use client"
import React from "react";

const TopExtention = ({content, classnames}) => {
  return (
    <div className={`top_extention ${classnames}`}>
      <div className="content">{content}</div>
      <div className="addon"></div>
    </div>
  );
};

export default TopExtention;
