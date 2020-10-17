import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import AdminsHome from '../Admin/AdminsHome/AdminsHome';
import CustomersHome from '../Customer/CustomersHome/CustomersHome';
import './Dashboard.css';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/admins')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            console.log(data[0].email)
            setUser(data)
            console.log(user);
        })
    },[])
    return (
        
        <div>
            
            {  
                user.map(singleUser=>singleUser.email===loggedInUser.email && <AdminsHome></AdminsHome>)
            }
            {  
                user.map(singleUser=>singleUser.email!==loggedInUser.email && <CustomersHome></CustomersHome>)
            }
        </div>
    );
};

export default Dashboard;