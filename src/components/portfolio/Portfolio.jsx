import React from 'react';
import { SectionTitle } from '../SectionTitle';
import './portfolio.css';
import { WebPage } from './WebPage';

export const Portfolio = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <SectionTitle title="PORTFOLIO" />
            <div className="row website-container">
                <WebPage src="./images/consultora.png" href="https://consultoraparaemprendedores.com" alt="consultora" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap", "fab fa-react"]} />
                <WebPage src="./images/grupo-hernandez.png" href="https://www.grupohernandezsa.com/" alt="grupo hernandez" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap"]} />
                <WebPage src="./images/blog.png" href="https://react-blog-fab.herokuapp.com/" alt="blog app" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap", "fab fa-react fab-fa-node-js"]} />
                <WebPage src="./images/chatbot.png" href="https://chatbotpreview.herokuapp.com" alt="chatbot" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap"]} />
                <WebPage src="./images/easybank.png" href="https://easybank-2.vercel.app" alt="easybank" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap"]} />
            </div>

        </section>
    )
}
