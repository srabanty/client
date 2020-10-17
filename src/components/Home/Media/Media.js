import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Media.css';

const Media = () => {
    return (
        <div className="container">
            <div className="media row d-flex justify-content-between">
                <div className="col-md-2">
                    <img className="img-fluid" src={slack} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid" src={google} alt=""/>
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={uber} alt=""/>
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={netflix} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid" src={airbnb} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Media;