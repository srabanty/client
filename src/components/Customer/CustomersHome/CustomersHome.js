import React from 'react';
import './CustomersHome.css';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const CustomersHome = () => {
  const { register, errors } = useForm();
  //const onSubmit = data => console.log(data);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [info, setInfo] = useState({});
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = ()=>{
        const formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('title', info.title);
        formData.append('details', info.details);
        formData.append('price', info.price);

        fetch('http://localhost:5000/addOrders',{
            method:'POST',
            body: formData
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })
        .cache(error=>{
            console.log(error);
        })
        document.getElementById('loginUser').innerText = loggedInUser.name
    } 
    return (
        <div className="container">
            <div className="row pt-2 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h3>Order</h3>
                    <div className="d-flex">
                        <img className="login-img" src={loggedInUser.photo} alt=""/>
                        <h3 className="pl-2">{loggedInUser.name}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Link to="/customersHome"><h5 className="pt-3 pb-2 text-success"><FontAwesomeIcon icon={faShoppingCart} className="mr-2"/> Order</h5></Link>
                    <Link to="/customersService"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/> Services</h5></Link>
                    <Link to="/customersReview"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faCommentAlt} className="mr-2"/> Review</h5></Link>
                </div>
                <div className="col-md-10 background-sky">
                    <div className="form pt-5 pl-4">
                       <form action="" onSubmit={handleSubmit}>
                            <input onBlur={handleBlur} className="form-control text-secondary pt-4 pb-4" type="text" placeholder="Your Name" name="name" required="true"/>
                            {errors.name && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input onBlur={handleBlur} className="form-control text-secondary pt-4 pb-4" type="text" placeholder="Your Email Address" name="email" required="true"/>
                            {errors.email && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input onBlur={handleBlur} className="form-control text-secondary pt-4 pb-4" type="text" placeholder="Service" name="title" required="true"/>
                            {errors.title && <span className="text-danger">This field is required</span>}
                            <br/>
                            <textarea onBlur={handleBlur} className="form-control text-secondary pt-4" name="" id="" cols="30" rows="5" placeholder="Project Details" name="details" required="true"></textarea>
                            {errors.details && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input onBlur={handleBlur} className="form-control text-secondary pt-4 pb-4" type="text" placeholder="Price" name="price" required="true"/>
                            {errors.price && <span className="text-danger">This field is required</span>}
                            <br/>
                            <div className="col-md-3 pl-0">
                                <input className="btn btn-dark pt-3 pb-3 mt-3" type="submit" value="Send"/>
                            </div>
                            <div className="col-md-9">

                            </div>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersHome;