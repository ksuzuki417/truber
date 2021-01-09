import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
import TruckCard from "./Pages/TruckSearch/index";
import BookTruck from "./Pages/BookingPage/index";
import TruckInfo from "./Pages/Truckinfo";
import RequestBooking from "./Pages/Booking";
import AuthPage from "./Pages/AuthenticatePage"

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component= {Homepage} />
          <Route path="/signup" component= {Signup} />
          <Route path="/login" component= {Login} />
          <Route path="/truckInfo" component= {TruckInfo} />
          <Route path="/client" component = {TruckCard} />
          <Route exact path="/bookingPage" component= {BookTruck} />
				  <Route path="/truckprofile" component= {RequestBooking} />
          <Route path="/authenticated" component= {AuthPage} />
        </Switch>
    </Router>
  );
}
//<Route path="/truckInfo" component= {TruckInfo} /><Route exact path={["/client"]}><TruckCard/></Route>

export default App;
