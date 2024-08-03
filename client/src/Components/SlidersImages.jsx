import React, { useState, useEffect } from "react";
import "./custom.slider.css";
export const SlidersImages = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (isPlaying) {
      const id = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
      }, 5000);
      setTimeID(id);
    }

    return () => {
      if (timeID) {
        clearTimeout(timeID);
      }
    };
  }, [isPlaying, activeIndex, children.length]);

  const AutoPlayStop = () => {
    setIsPlaying(false);
    if (timeID) {
      clearTimeout(timeID);
    }
  };

  const AutoPlayStart = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="container__slider "
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={`slider__item ${
              index === activeIndex ? "slider__item-active" : ""
            }`}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
                setIsPlaying(false);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

import images from "./Images";

export const ImagesMaping = () => {
  return (
    <>
      <div className="flex w-full">
        <SlidersImages>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </SlidersImages>
        
        <div className="w-[35%] ">
          <img
            className=""
            src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png"
            alt=""
          />
        </div>
      </div>
      <p className=" border-b-2 h-20 flex items-center justify-center text-xl font-medium text-[#666666]">
        Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
      </p>
      <div className="px-32 pt-8 bg-[#F6F6F6]">
        <img src="/bnner.webp" alt="" />
      </div>
      
    </>
  );
};
