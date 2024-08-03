import { useEffect, useState } from 'react';
import "./login.slider.css";

const ImagesSlider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (isPlaying) {
      const id = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
      }, 4000);
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
    <div className="container__slider2" onMouseEnter={AutoPlayStop} onMouseLeave={AutoPlayStart}>
      {children.map((item, index) => (
        <div className={`slider__item2 ${index === activeIndex ? "slider__item-active2" : ""}`} key={index}>
          <div className="slider-content">
            {item}
          </div>
        </div>
      ))}

      <div className="container__slider__links2">
        {children.map((item, index) => (
          <button
            key={index}
            className={activeIndex === index ? "container__slider__links-small2 container__slider__links-small-active2" : "container__slider__links-small2"}
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
              setIsPlaying(false);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import image1 from "/sliderimag1.png";
import image2 from "/sliderimag2.png";
import image3 from "/sliderimag3.png";
import image4 from "/sliderimag4.png";
import image5 from "/sliderimag5.png";

const sliderdata = [
  {
    id: "hfgfgfbfgfwgfwfddd",
    image: image1,
    title: "Make Healthcare Simpler",
    dis: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
  {
    id: "cgcgfwgfwfddd",
    image: image2,
    title: "Make Healthcare Simpler",
    dis: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
  {
    id: "hfgfgfbmmmmmmfgfwgfwfddd",
    image: image3,
    title: "Make Healthcare Simpler",
    dis: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
  {
    id: "cgcgfwgkkkkssstfgfwfddd",
    image: image4,
    title: "Make Healthcare Simpler",
    dis: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
  {
    id: "cgcgfwgkkkkbtyuieffhssstfgfwfddd",
    image: image5,
    title: "Make Healthcare Simpler",
    dis: "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
  },
];

export const SignUp = ({ isOpen, onClose }) => {
  return (
    <Modal size="" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white" w={"60%"} h={"40em"} className="border">
        <ModalCloseButton />
        <ModalBody className="modal-body">
          <div className="left">
            <ImagesSlider>
              {sliderdata.map((data, index) => (
                <div key={index}>
                  <img src={data.image} alt={data.title} />
                  <p className='text-center font-bold text-[#4A4A4A]'>{data.title}</p>
                  <p className='text-center text-sm'>{data.dis}</p>
                </div>
              ))}
            </ImagesSlider>
          </div>
          <hr className=' border h-[100%]'/>
          <div className=" right">

          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
