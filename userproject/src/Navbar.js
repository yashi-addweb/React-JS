import React, { Component } from 'react';
import {  BrowserRouter as Router ,Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <>
                   <Router>
 
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      
        <li className="nav-item">
          <Link className="nav-link" to="/" target="__blank" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/users" target="_blank">Users</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/posts" target="_blank" >Posts</Link>
        </li>


       
      </ul>
    
    </div>
  </div>
</nav>
        </Router>
    </>
        )
    }
}
