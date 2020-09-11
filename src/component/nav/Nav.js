import React from 'react'
import {Route,Link,NavLink} from "react-router-dom";
import "./Nav.css"
import "bootstrap/dist/css/bootstrap.css"
export default function Nav() {
    return (
        <>
        <div className="top-header primary-color">

<div className="container">hi</div>

        </div>
            <nav>
                <div className="primary-color main-header ">
<ul className="container">
    <li><NavLink className="link" to="/" exact activeClassName="custom-active"> home</NavLink> </li>
    <li id="drp">category
<div id="wrappe-div">drhdn</div>


    </li>
    <li>Deleniti.</li>
    <li>Est.</li>
    <li><NavLink className="link" to="/contact" exact activeClassName="custom-active"> contact</NavLink></li>
</ul>
</div>


            </nav>
        </>
    )
}
