import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
//import Owner from "./components/Owner";
import TruckCard from "./Pages/TruckSearch";

import TruckInfo from "./Pages/Truckinfo";
import RequestBooking from "./Pages/Booking";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/homepage"]}>
            <Homepage/>
          </Route>
          <Route exact path={["/signup"]}>
            <Signup/>
          </Route>
          <Route exact path={["/login"]}>
            <Login/>
          </Route>
          <Route exact path={["/truckInfo"]}>
            <TruckInfo/>
          </Route>
          <Route exact path={["/bookingPage"]}>
            <RequestBooking/>
          </Route>
          <Route exact path={["/client"]}>
          <TruckCard/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
