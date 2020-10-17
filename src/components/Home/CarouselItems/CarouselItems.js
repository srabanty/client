import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CarouselItems.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
        
      };
      return (
        // <div className="project-slider">
        //   <Slider {...settings}>
        //     <div>
        //       <img src={carousel1} alt=""/>
        //     </div>
        //     <div>
        //         <img src={carousel2} alt=""/>
        //     </div>
        //     <div>
        //         <img src={carousel3} alt=""/>
        //     </div>
        //   </Slider>
        // </div>
        <div>
        <Slider {...settings}>
          <div className="h-100">
            <img className="carouselImg" src={carousel1} alt=""/>
          </div>
          <div>
            <img className="carouselImg" src={carousel2} alt=""/>
          </div>
          <div>
            <img className="carouselImg" src={carousel3} alt=""/>
          </div>
          <div>
            <img className="carouselImg" src={carousel4} alt=""/>
          </div>
          <div>
            <img className="carouselImg" src={carousel5} alt=""/>
          </div>
          <div>
            <img className="carouselImg" src={carousel1} alt=""/>
          </div>
          <div>
            <img className="carouselImg" src={carousel2} alt=""/>
          </div>
        </Slider>
      </div>
      );
    }
  }