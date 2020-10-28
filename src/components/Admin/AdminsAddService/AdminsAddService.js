import React from 'react';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './AdminsAddService.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AdminsAddService = () => {
    const { register, errors } = useForm();
    // const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [info, setInfo] = useState({});
    const [file,setFile] = useState(null);
    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e)=>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = ()=>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://quiet-savannah-61293.herokuapp.com/addService',{
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
    return (
        <div className="container">
            <div className="row pt-2 pb-5">
                <div className="col-md-3 logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-md-9 d-flex justify-content-between">
                    <h3>Add Services</h3>
                    <div className="d-flex">
                        <img className="login-img" src={loggedInUser.photo} alt=""/>
                        <h3 className="pl-2">{loggedInUser.name}</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Link to="/adminsServiceList"><h5 className="pt-3 pb-2 text-dark"><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/> Service list</h5></Link>
                    <Link to="/adminsAddService"><h5 className="pb-2 text-success"><FontAwesomeIcon icon={faPlus} className="mr-2"/> Add Service</h5></Link>
                    <Link to="/makeAdmin"><h5 className="pb-2 text-dark"><FontAwesomeIcon icon={faUserPlus} className="mr-1"/> Make Admin</h5></Link>
                </div>
                <div className="col-md-9 background-sky">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row background-white">
                            <div className="col-md-6">
                                <div className="admin-form">
                                    <label htmlFor="title"><strong>Service Title</strong></label>
                                    <input onBlur={handleBlur} type="text" className="form-control" placeholder="Enter Title" name="title" required="true"/>
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                    <br/>
                                    <label htmlFor="description"><strong>Description</strong></label>
                                    <textarea onBlur={handleBlur}  name="description" id="" cols="30" rows="5" className="form-control" placeholder="Enter Description" required="true"></textarea>
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="icon"><strong>Icon</strong></label>
                                <input onChange={handleFileChange} type="file" className="form-control" name="icon" id=""  required="true"/>
                                {errors.icon && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                            <div className="row d-flex">
                                <div className="col-md-3 pl-0">
                                
                                </div>
                                <div className="col-md-9 pr-3 text-right">
                                    <input style={{display:'inline-block'}} className="btn btn-success pt-3 pb-3 mt-2 pr-5 pl-5" type="submit" value="Submit"/>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminsAddService;