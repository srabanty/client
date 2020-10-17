import React from 'react';
import { CarouselItem } from 'react-bootstrap';
import CarouselItems from '../../Home/CarouselItems/CarouselItems';
import './Projects.css';

const Projects = () => {
    return (
        <section className="all-projects">
            <h1 className="text-center text-white"><strong>Here are some of <span>our works</span></strong></h1>
            <div className="container">
                <CarouselItems></CarouselItems>
                {/* <div className="item"><a href="#"><img src={carousel1} alt=""/></a></div>
                <div className="item"><a href="#"><img src={carousel2} alt=""/></a></div>
                <div className="item"><a href="#"><img src={carousel3} alt=""/></a></div> */}
            </div>
        </section>
    );
};

export default Projects;