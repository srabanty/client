import React from 'react';
import bannerImg from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="container">
            <div className="row d-flex align-items-center">
            <div className="col-sm-5 col-md-5">
                <h1 className="mb-4"><strong>Let's Grow Your <br/> Brand To The <br/>Next Level</strong></h1>
                <h6 className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Autem minima, fuga nisi quam ullam esse amet nam dignissimos molestiae eum.</h6>
                <button className="btn btn-dark pr-5 pl-5 pb-2"><strong>Hire Us</strong></button>
            </div>
            <div className="col-sm-7 col-md-7">
                <img src={bannerImg} alt="" className="img-fluid"/>
            </div>
            </div>
        </div>
        </div>
    );
};

export default HeaderMain;