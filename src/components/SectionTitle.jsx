import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const SectionTitle = ({ title }) => {
    return (
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h2>
                <span>{'<'}</span> {title} <span>{' />'}</span>
            </h2>
            {/* <div className="underline"></div> */}
        </ScrollAnimation>
    )
}
