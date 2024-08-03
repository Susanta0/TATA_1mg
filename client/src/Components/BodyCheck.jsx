import React from 'react'
import "./bodyCheck.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineHealthAndSafety } from "react-icons/md";
export const BodyCheck = ({ data, heading, seeall }) => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <div className="health bg-white py-6 shadow-md px-[8em]">
          <Slider {...settings}>
            {data.map((ele) => (
              <div
                className="hover:drop-shadow-md cursor-pointer border border-gray-200 bg-[#FFFFFF] py-3 pl-4  rounded-md"
              >
                <div className=" relative flex flex-col gap-10 ">
                    <div className='flex items-center justify-between'>
                        <p className="text-sm font-bold">{ele.title}</p>
                        <div className='flex gap-1 bg-[#FFE3C2] items-center w-fit rounded-sm px-1 py-1 '>
                            <MdOutlineHealthAndSafety className='bg-transparent h-5 w-5'/>
                            <p className='bg-transparent text-xs font-bold'>{ele.safe}</p>
                        </div>
                    </div>
                    {ele.totalTest &&  <p className=' absolute w-fit top-7 bg-transparent text-xs font-semibold '>{ele.totalTest}</p>}
                   
                    <div className='flex items-center w-fit gap-3'>
                        <p className='font-bold'>{ele.rs}</p>
                        <p className='text-xs line-through'>{ele.offer}</p>
                        {ele.off &&  <p className='text-xs font-semibold py-0.5 px-0.5 border-[#42BA50] bg-[#F3FBF4] border border-dotted text-[#42BA50]'>{ele.off}</p>}
                        {/* <p className='text-xs font-semibold py-0.5 px-0.5 border-[#42BA50] bg-[#F3FBF4] border border-dotted text-[#42BA50]'>{ele.off}</p> */}
                    </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </>
  )
}
