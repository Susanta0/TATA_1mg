import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

export const Products = ({ heading, seeall }) => {
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

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://tata-1mg-vbxx.onrender.com/product/showcollagen/`,
        {}
      );
      console.log(res.data.productDetails);
      setData(res.data.productDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#FFFFFF] w-[100%] m-auto">
        <div className="flex justify-between items-center px-[8em] pt-8 pb-2 bg-[#F6F6F6]">
          <h1 className="font-normal text-lg bg-[#F6F6F6]">{heading}</h1>
          {!seeall == "" && (
            <p className="text-xs font-bold text-white px-2 py-1 rounded-md bg-[#FF6F61]">
              {seeall}
            </p>
          )}
        </div>
        <div className="bg-white shadow-md px-[8em]">
          <Slider {...settings}>
            {data.map((ele) => (
              <div
                key={ele.id}
                className="h-[26em] border hover:border-2 hover:shadow-2xl p-[26px] rounded-md"
              >
                <div className=" h-[14em] items-center">
                  <img
                    className="h-44 w-44 m-auto"
                    src={ele.image[0]}
                    alt="product image"
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <p className="text-xs font-medium">
                    {ele.title.slice(0, 40)}..
                  </p>
                  <p className="text-xs text-gray-400">
                    {ele.dis.slice(0, 40)}
                  </p>
                  <p className="text-xs text-gray-400">
                    Delivery by{" "}
                    <span className="font-bold text-xs text-black">
                      {ele.date_time}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <p className="text-xs line-through">MRP {ele.cutPrice}</p>
                    <p className="text-xs font-medium text-[#42BA50] ">
                      {ele.off}
                    </p>
                  </div>
                  <p className=" font-bold">₹{ele.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
