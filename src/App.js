import React, { useEffect, useRef, useState } from 'react';
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
import Navbar from './components/Navbar';
// import Footer from './components/Footer';


function App() {
// Dark Mode Functions
const [mode, setmode] = useState('light');
const toggleMode = () => {
  if (mode === 'light') {
    setmode('dark');
    document.body.style.backgroundColor = '#192535';
    document.body.style.color = 'white';
  }
  else {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

return (
  <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <AuthProvider>
      <TransProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/all" component={Transactionboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/reset" component={ForgotPassword} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </TransProvider>
    {/* <Footer /> will modify later*/}
    </AuthProvider>
  </Router>
);
}

export default App;
