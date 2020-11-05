import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Feature = ({ classText, title, content }) => {
    const [isRotating, setIsRotating] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleHover = () => {
        setIsRotating(true);
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleAnimation = () => {
        if (isHovering === false) {
            setIsRotating(false);
        }
    }


    return (
        <ScrollAnimation
            animateIn={title === 'Responsividad' ? "fadeInLeft" : title === 'Dinamismo' ? 'fadeIn' : 'fadeInRight'}
            animateOnce={true}
            className="feature col-lg-4">
            <div
                className="feature-inner"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseOut}
            >
                <div className="feature-icon-container">
                    <span
                        className={`${classText} ${isRotating && 'icon-rotate'}`}
                        onAnimationIteration={handleAnimation}
                    />
                </div>
                <h3 className="feature-title"><span>{'{ '}</span>{title}<span>{' }'}</span></h3>
                <p className="feature-text">{content}</p>
            </div>
        </ScrollAnimation>
    )
}
