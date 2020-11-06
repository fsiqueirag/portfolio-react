import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const WebPage = ({ src, alt, iconClasses, href }) => {
    return (
        <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={0.2}
            className="col-lg-6 web-container">
            <div className="website-description">
                {iconClasses.map((iconClass, index) => {
                    return <span key={index} className={`${iconClass} website-icon`} />
                })}
            </div>
            <div className="image-container">
                <a href={href} target="_blank">
                    <img src={src} alt={alt} className="website-image" />
                </a>
            </div>
        </ScrollAnimation>

    )
}
