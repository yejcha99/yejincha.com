/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom navbar-fixed">
            <a className="navbar-brand" href="#">YC</a>
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: 'white'}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Experiences">Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Yejin_Resume.pdf" target="_blank">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Life</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
