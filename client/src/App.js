import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
import Owner from "./components/Owner";
import TruckCard from "./Pages/TruckSearch";




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
          <Route exact path={["/owner"]}>
            <Owner/>
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
