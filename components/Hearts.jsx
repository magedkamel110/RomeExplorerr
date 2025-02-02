"use client"
import React, { useState, useEffect } from "react";

const Hearts = ({ count }) => {
  const [isHalf, setIsHalf] = useState(false);
  const [hearts_count, set_hearts_count] = useState(false);
  useEffect(() => {
    const count_num_float = parseFloat(count);
    const count_num_int = parseInt(count);
    if (count_num_float != count_num_int) {
      setIsHalf(true);
    }
    set_hearts_count(count_num_int);
  }, []);
  return (
    <div className="hearts_container">
      {new Array(hearts_count).fill(0).map(() => (
        <svg
          class=""
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FavoriteIcon"
        >
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
      ))}
      {isHalf ? (
        <svg
          class="half_heart"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FavoriteIcon"
        >
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Hearts;
