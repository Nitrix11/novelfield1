import React, { useState } from "react";
import logo from"../assets/logo-rbg.png"
import AboutSection from "./About";
import { Routes, Route, Link } from 'react-router-dom';
const Nav = () => {


    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul >
                    <li>Home</li>
                 
                    <li >
                        <a href="#about">About</a></li>
             
                    
                    <li>
                        <a href="#contact-container"> Contact</a>
                       </li>
                    <li>
                        <a href="#gallery">   Gallery</a>
                     </li>

                </ul>
            </nav>

        </>
    );
};

export default Nav;
