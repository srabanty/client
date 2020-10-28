import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';

const MakeAdmin = () => {
    const { register, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = ()=>{
        const formData = new FormData()
        formData.append('email', info.email);
        
        fetch('https://quiet-savannah-61293.herokuapp.com/makeAdmin',{
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
    }
    //const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <div className="row pt-2 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h3>Make Admin</h3>
                    <div className="d-flex">
                        <img className="login-img" src={loggedInUser.photo} alt=""/>
                        <h3 className="pl-2">{loggedInUser.name}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Link to="/adminsServiceList"><h5 className="pt-3 pb-2 text-dark"><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/> Service list</h5></Link>
                    <Link to="/adminsAddService"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faPlus} className="mr-2"/> Add Service</h5></Link>
                    <Link to="/makeAdmin"><h5 className="pb-2 text-success"><FontAwesomeIcon icon={faUserPlus} className="mr-1"/> Make Admin</h5></Link>
                </div>
                <div className="col-md-9 background-sky">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row background-white">
                            <div className="col-md-6">
                                <div className="admin-form">
                                    <label htmlFor="email"><strong>Email</strong></label>
                                    <input onBlur={handleBlur} type="email" className="form-control" placeholder="Enter Email Address" name="email" required="true"/>
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="col-md-6 pr-3 pt-2 text-left">
                            <input style={{display:'inline-block'}} className="btn btn-success mt-4 pr-5 pl-5" type="submit" value="Submit"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;