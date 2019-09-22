import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../App.css';
import Home from "../views/Home";
import Post from "../views/Post";
import Footer from "./layout/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <div className=''>

                    <Switch>
                        <Route  exact path='/' component={Home}/>
                        <Route path='/:id/:slug' component={Post}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
