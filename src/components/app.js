import React from "react";
import Topbar from "./topbar/topbar";
import Homepage from "../pages/homepage/homepage";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Settings from "../pages/settings/settings";
import Single from "../pages/single/single";
import Write from "../pages/write/write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPinterestSquare, FaSearch } from "react-icons/fa";
import iconStyles from "./topbar/iconstyles.css"



function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
     <div className="icons">
        <FaFacebookSquare />
        < FaTwitterSquare /> 
        < FaInstagramSquare />
        < FaPinterestSquare />
     </div> 
      
      <div className="search-icon">
        <FaSearch />
      </div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;