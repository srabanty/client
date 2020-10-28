import React from 'react';
import './AdminsHome.css';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminsHome = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://quiet-savannah-61293.herokuapp.comh-61293.herokuapp.com/allOrders')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setOrders(data)
            console.log(orders);
        })
    },[])
    return (
        <div className="container">
            <div className="row pt-2 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h3>Service list</h3>
                    <div className="d-flex">
                        <img className="login-img" src={loggedInUser.photo} alt=""/>
                        <h3 className="pl-2">{loggedInUser.name}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Link to="/adminsServiceList"><h5 className="pt-3 pb-2 text-success"><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/> Service list</h5></Link>
                    <Link to="/adminsAddService"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faPlus} className="mr-2"/> Add Services</h5></Link>
                    <Link to="/makeAdmin"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faUserPlus} className="mr-1"/> Make Admin</h5></Link>
                </div>
                <div className="col-md-9 background-sky">
                    <div className="all-service-list pt-3 mt-4">
                        <div className="row list-top mr-2 ml-2 mt-4">
                            <div className="col-md-2">
                                <h5>Name</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>Email</h5>
                            </div>
                            <div className="col-md-3">
                                <h5>Service</h5>
                            </div>
                            <div className="col-md-3">
                                <h5>Project Details</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>Status</h5>
                            </div>
                        </div>
                        {
                            orders.map(order=>
                            <div className="row list-body mr-2 ml-2 pt-3 pb-3">
                                <div className="col-md-2">
                                    <h6>{order.name}</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6>{order.email}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>{order.title}</h6>
                                </div>
                                <div className="col-md-3">
                                    <h6>{order.details}</h6>
                                </div>
                                <div className="col-md-2">
                                    <select name="status" id="status">
                                        <option value="ongoing" className="text-warning">Ongoing</option>
                                        <option value="pending" className="text-danger">Pending</option>
                                        <option value="done" className="text-success">Done</option>
                                    </select>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminsHome;