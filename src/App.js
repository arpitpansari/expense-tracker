import React, { useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import Transactionboard from './components/Dashboard/Transactionboard.js';
import Signup from './components/Authentication/Signup.js';
import Login from './components/Authentication/Login.js';
import ForgotPassword from './components/Authentication/ForgotPassword.js';
import {AuthProvider} from './Context/AuthContext';
import {TransProvider} from './Context/TransContext';
// import {ThemeProvider} from './Context/ThemeContext';
import PrivateRoute from "./components/Authentication/PrivateRoute";



function App() {
  return (


   <Router>
   <AuthProvider>
   <TransProvider>
     <Switch>
       <PrivateRoute  exact path="/" component={Dashboard}/>
       <PrivateRoute  exact path="/all" component={Transactionboard}/>
       <Route path="/signup" component={Signup}/>
       <Route path="/login" component={Login}/>
       <Route path="/reset" component={ForgotPassword}/>
       <Route>
        <Redirect to ='/' />
      </Route>

     </Switch>
       </TransProvider>
   </AuthProvider>
   </Router>
  );
}

export default App;
