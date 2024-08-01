import React from 'react'
import Slider from "react-slick";
// react slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { healthconcerns } from '../Data/healthconcerns';
export const Productbar = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      };
    
  return (
    <>
      <div className="mt-2 px-[8em]">
        <Slider{...settings}>
          {healthconcerns.map((ele) => (
              <div className="border w-[10em] flex flex-col items-center">
                <img className="h-36" src={ele.image} alt="image" />
                <p>{ele.title}</p>
              </div>
          ))}
        </Slider>
      </div>
    
    </>
  )
}
