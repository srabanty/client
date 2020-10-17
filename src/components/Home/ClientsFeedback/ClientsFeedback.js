import React from 'react';
import './ClientsFeedback.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import SingleFeedback from '../SingleFeedback/SingleFeedback';
import { useState } from 'react';
import { useEffect } from 'react';

// const allFeedback = [
//     {
//         photo: customer1,
//         name: 'Nash Patrik',
//         job:'CEO, Manpol',
//         comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum nemo quibusdam error accusamus quasi et nostrum corporis soluta qui.'
//     },
//     {
//         photo: customer2,
//         name: 'Miriam Barron',
//         job:'CEO, Manpol',
//         comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum nemo quibusdam error accusamus quasi et nostrum corporis soluta qui.'
//     },
//     {
//         photo: customer3,
//         name: 'Bria Malone',
//         job:'CEO, Manpol',
//         comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum nemo quibusdam error accusamus quasi et nostrum corporis soluta qui.'
//     }
// ]
const ClientsFeedback = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/feedbacks')
        .then(res=>res.json())
        .then(data=>setFeedback(data))
    },[])
    return (
        <div className="container feedbacks">
            <h1 className="text-center"><strong>Clients<span>Feedback</span></strong></h1>
                <section className="row d-flex p-4">
                    {
                        feedback.map(feedback => <SingleFeedback feedback={feedback}></SingleFeedback>)
                    }
                </section>
        </div>
    );
};

export default ClientsFeedback;