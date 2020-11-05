import React from 'react';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">SOBRE MI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">CONTACTO</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
