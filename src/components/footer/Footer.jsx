import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './footer.css';

export const Footer = () => {
    return (
        <footer className="contact" id="contacto">
            <ScrollAnimation animateIn="fadeIn" duration={0.2}>
                <div className="contact-icons">
                    <a href="https://www.linkedin.com/in/fabrizio-siqueira-giampietro-876661186/" target="_blank">
                        <span
                            className="fab fa-linkedin-in contact-icon" />
                    </a>
                    <a href="https://github.com/fsiqueirag?tab=repositories" target="_blank">
                        <span
                            className="fab fa-github contact-icon" />
                    </a>
                </div>
                <p>fabrizio.siqueira@hotmail.com</p>

                <p>FABRIZIO SIQUEIRA <span>©2021</span></p>

            </ScrollAnimation>
        </footer>
    )
}
