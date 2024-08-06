import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
export const Carousels = ({ data, heading, seeall }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#FFFFFF] w-[100%] m-auto">
        <div className="flex justify-between items-center px-[8em] pt-8 pb-2 bg-[#F6F6F6]">
          <h1 className="font-normal text-lg bg-[#F6F6F6]">{heading}</h1>
          {!seeall=="" && <p className='text-xs font-bold text-white px-2 py-1 rounded-md bg-[#FF6F61]'>{seeall}</p>}
          
        </div>
        <div className="bg-white shadow-md px-[8em]">
          <Slider {...settings}>
            {data.map((ele) => (
              <div
              key={ele.id}
                className="h-[14em] hover:border-2 hover:shadow-2xl bg-[#FFFFFF] p-[26px] rounded-md"
              >
                <div className="flex gap-4 flex-col items-center">
                  <img
                    className="h-30 w-30 m-auto"
                    src={ele.image}
                    alt="product image"
                  />
                  <p className="text-xs font-medium text-center">{ele.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
