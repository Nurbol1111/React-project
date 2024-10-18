import React from "react";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <div className="main-block">
                <img className="main-img" src="../image/cat.jpg" alt="" />    
                <h1>Birmanov Nurbol</h1>
                <p className="main-subtitle">Programmer. Creative. Innovator</p>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p>
                <Link className="main-link" to="/inner">Know more</Link>
            </div> 
        </div>
    )
}

export default Main