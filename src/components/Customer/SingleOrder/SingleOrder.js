import React from 'react';
import web from '../../../../src/images/icons/service1.png';
const SingleOrder = ({orders}) => {
    return (
        <div className="col-md-5">
            <div className="card-items  mt-3 mb-3">
                <div className="card-top pb-3 d-flex justify-content-between">
                    <img src={web} alt=""/>
                    <h4 style ={{backgroundColor: 'lightpink', borderRadius:'5px'}} className="text-danger">Pending</h4>
                </div>
                <div className="card-content">
                    <h4 className="text-left"><strong>{orders.title}</strong></h4>
                    <p className="text-secondary text-left">{orders.details}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;