import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "./components/Login";
import React from "react";
<<<<<<< HEAD
import SignUp from "./components/SignUp";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
import Owner from "./components/Owner";
import TruckCard from "./Pages/TruckSearch";


>>>>>>> c2618144658edfb206c64e67a38b8c28174ff20a

function App() {
  return (
    <Router>
      <div className="App">
    <Route exact path="/" component={Login} />
    <Route exact path="/SignUp" component={SignUp}/>
    </div>
    </Router>
  );
}


export default App;
