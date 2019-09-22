import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import '../App.css';
import Home from "../views/Home";
import Post from "../views/Post";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Router>
          <Switch>
            <Route  exact path='/' component={Home}/>
            <Route path='/:id' component={Post}/>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
