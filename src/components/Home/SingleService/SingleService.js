import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {
    return (
        
        <div className="col-md-4 service-card">
            <Link to="/customersHome">
            <div className={`text-center info-container p-3`}>
                {
                    service.image ? <img style={{width:'60px'}} src={`data:image/png;base64,${service.image.img}`}/>
                    :
                    <img src={`http://localhost:5000/${service.img}`} alt=""/>
                }
                <h4><strong>{service.title}</strong></h4>
                <p className="text-secondary">{service.description}</p>
            </div>
            </Link>
        </div>
        
    );
};

export default SingleService;