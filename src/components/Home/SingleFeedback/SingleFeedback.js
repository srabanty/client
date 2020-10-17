import React from 'react';
import client from '../../../images/customer-2.png';
import './SingleFeedback.css';
const SingleFeedback = ({feedback}) => {
    return (
        <div className="col-md-4 p-2 feedback-card mt-4">
            <div className={`text-left info-container m-3`}>
                <div className="row d-flex justify-content-between">
                    <div className="feedback-img">
                        <img src={client} alt=""/>
                    </div>
                    <div>
                        <h5><strong>{feedback.name}</strong></h5>
                        <h6><strong>{feedback.company}</strong></h6>
                    </div>
                </div>
                <div className="row">
                    <p className="text-secondary pt-4">{feedback.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedback;