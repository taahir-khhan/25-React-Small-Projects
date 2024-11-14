import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col bg-slate-100">
      <span className="text-3xl font-medium mb-4">Star Rating</span>
      <div className="flex">
        {[...Array(noOfStars)].map((_, idx) => {
          idx += 1;

          return (
            <FaStar
              key={idx}
              size={40}
              className={
                idx <= (hover || rating)
                  ? "text-yellow-500 transition-all duration-600"
                  : "text-black"
              }
              onClick={() => setRating(idx)}
              onMouseMove={() => setHover(idx)}
              onMouseLeave={() => setHover(rating)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
