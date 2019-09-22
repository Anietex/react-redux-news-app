import React from 'react'
import {Link, withRouter} from "react-router-dom";


const Navbar = () => <nav>
    <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">PostApp</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        </ul>
    </div>
</nav>


export default withRouter(Navbar);