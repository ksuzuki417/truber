import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
import Header from "./components/Header/index";
import TruckCard from "./Pages/TruckSearch/index";
import BookTruck from "./Pages/BookingPage";
import TruckInfo from "./Pages/TruckInfo";
import RequestBooking from "./Pages/Booking";
import "./index.css";

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
        <Route exact path="/" component= {Homepage} />
          <Route path="/signup" component= {Signup} />
          <Route path="/login" component= {Login} />
          <Route path="/truckInfo" component= {TruckInfo} />
          <Route exact path={["/client"]}>
          <TruckCard/>
          </Route>
          <Route path="/bookingPage" component= {BookTruck} />
				  <Route path="/truckprofile" component= {RequestBooking} />
        </Switch>
    </Router>
  );
}


export default App;
