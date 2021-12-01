import React from "react";
import { Carousel } from "react-bootstrap";
//images
import ImageOne from "../images/ImageOne-1.png";
import ImageTwo from "../images/ImageTwo-1.png";
import ImageThree from "../images/ImageThree-1.png";
import ImageFour from "../images/ImageFour.png";
//CSS
import "./slider.css";

const Slider = () => {
  return (
    <Carousel controls={true} fade className='carousel'>
      <Carousel.Item>
        <img className='d-block w-100' src={ImageOne} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={ImageTwo} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={ImageThree} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={ImageFour} alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
