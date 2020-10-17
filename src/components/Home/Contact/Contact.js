import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container contact-details">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <h1><strong>Let US handle your <br/>project, professionally !</strong></h1>
                        <p className="text-secondary mt-4">With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in generate</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <input className="form-control text-secondary" type="text" placeholder="Your email address"/>
                            <br/>
                            <input className="form-control text-secondary" type="text" placeholder="Your name / Company's name"/>
                            <br/>
                            <textarea className="form-control text-secondary" name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            <button className="btn btn-dark pr-5 pl-5 mt-3">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-secondary text-center mt-5">All right Reserved &copy; 2020 || Designed By Srabanty</p>
        </section>
    );
};

export default Contact;