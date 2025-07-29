import React from "react";
import "./autoplaycarousel.css";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((key) => (
          <CarouselItem
            key={`first-${key}`}
            imgUrl={cardDetails[key].imgUrl}
            imgTitle={cardDetails[key].title}
          />
        ))}
        {Object.keys(cardDetails).map((key) => (
          <CarouselItem
            key={`second-${key}`}
            imgUrl={cardDetails[key].imgUrl}
            imgTitle={cardDetails[key].title}
          />
        ))}
      </div>
    </div>
  );
}
