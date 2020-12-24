import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
import TruckCard from "./Pages/TruckSearch";
import Owner from "./Pages/Owner"

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
          <Login/>
        </Switch>
        <Route exact path={["/search"]}>
          <TruckCard/>
        </Route>
				<Route exact path={["/owner"]}>
					<Owner/>
						</Route>
      </div>
    </Router>
  );
}

export default App;
