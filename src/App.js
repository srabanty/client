import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import CustomersServiceList from './components/Customer/CustomersServiceList/CustomersServiceList';
import CustomersReview from './components/Customer/CustomersReview/CustomersReview';
import CustomersHome from './components/Customer/CustomersHome/CustomersHome';
import AdminsHome from './components/Admin/AdminsHome/AdminsHome';
import AdminsAddService from './components/Admin/AdminsAddService/AdminsAddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path = "/login">
            <Login></Login>
          </Route>
          <PrivateRoute path = "/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path = "/customersHome">
            <CustomersHome></CustomersHome>
          </PrivateRoute>
          <PrivateRoute path = "/customersService">
            <CustomersServiceList></CustomersServiceList>
          </PrivateRoute>
          <PrivateRoute path = "/customersReview">
            <CustomersReview></CustomersReview>
          </PrivateRoute>
          <PrivateRoute path = "/adminsServiceList">
            <AdminsHome></AdminsHome>
          </PrivateRoute>
          <PrivateRoute path = "/adminsAddService">
            <AdminsAddService></AdminsAddService>
          </PrivateRoute>
          <PrivateRoute path = "/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
