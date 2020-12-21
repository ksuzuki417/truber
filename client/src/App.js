import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import SignUp from "./components/SignUp";

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
