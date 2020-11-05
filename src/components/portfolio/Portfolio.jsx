import React from 'react';
import { SectionTitle } from '../SectionTitle';
import './portfolio.css';
import { WebPage } from './WebPage';

export const Portfolio = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <SectionTitle title="PORTFOLIO" />
            <div className="row website-container">
                <WebPage src="./images/chatbot.png" alt="chatbot" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap", "fab fa-node-js"]} />
                <WebPage src="./images/easybank.png" alt="easybank" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap"]} />
                <WebPage src="./images/chatbot.png" alt="chatbot" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap", "fab fa-node-js"]} />
                <WebPage src="./images/easybank.png" alt="easybank" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap"]} />
                <WebPage src="./images/chatbot.png" alt="chatbot" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap", "fab fa-node-js"]} />
                <WebPage src="./images/easybank.png" alt="easybank" iconClasses={["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-bootstrap"]} />
            </div>

        </section>
    )
}
