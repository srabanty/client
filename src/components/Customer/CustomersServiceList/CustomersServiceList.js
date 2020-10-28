import React from 'react';
import './CustomersServiceList.css';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const CustomersServiceList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(()=>{
        fetch('https://quiet-savannah-61293.herokuapp.com/order?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className="container">
            <div className="row pt-2 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h3>Services</h3>
                    <div className="d-flex">
                        <img className="login-img" src={loggedInUser.photo} alt=""/>
                        <h3 className="pl-2">{loggedInUser.name}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <Link to="/customersHome"><h5 className="pt-3 pb-2 text-dark"><FontAwesomeIcon icon={faShoppingCart} className="mr-2"/> Order</h5></Link>
                    <Link to="/customersService"><h5 className="pb-2 text-success"><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/> Services</h5></Link>
                    <Link to="/customersReview"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faCommentAlt} className="mr-2"/> Review</h5></Link>
                </div>
                <div className="col-md-10 background-sky pt-5">
                    <div className="row d-flex justify-content-around">
                            {
                                orders.map(orders=><SingleOrder orders={orders}></SingleOrder>)
                            }
                        {/* <div className="col-md-5">
                            <div className="card-items mt-3 mb-3">
                                <div className="card-top pb-3 d-flex justify-content-between">
                                    <img src={web} alt=""/>
                                    <h4 className="text-danger">Pending</h4>
                                </div>
                                <div className="card-content">
                                    <h4 className="text-left"><strong>Web Design and Design</strong></h4>
                                    <p className="text-secondary text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eveniet fugiat veritatis, iste mollitia id?</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersServiceList;