import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import SingleService from '../SingleService/SingleService';
import './Services.css';

// const serviceInfo = [
//     {
//         icon: service1,
//         title: 'Web & Mobile Design',
//         boxShadow:'none',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum nemo quibusdam error accusamus quasi et nostrum corporis soluta qui.'
//     },
//     {
//         icon: service2,
//         title: 'Graphic Design',
//         boxShadow:'dark',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum nemo quibusdam error accusamus quasi et nostrum corporis soluta qui.'
//     },
//     {
//         icon: service3,
//         title: 'Web Development',
//         boxShadow:'none',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum nemo quibusdam error accusamus quasi et nostrum corporis soluta qui.'
//     }
// ]

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
    return (
        <div className="container services">
            <h1 className="text-center"><strong>Provide Awesome <span>Services</span></strong></h1>
                <section className="row d-flex">
                    {
                        serviceData.map(service => <SingleService service={service}></SingleService>)
                    }
                </section>
        </div>
    );
};

export default Services;