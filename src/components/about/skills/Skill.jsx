import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { IconDescription } from './IconDescription';

export const Skill = ({ id, iconClass, skill }) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    }

    const handleLeave = () => {
        setIsHovered(false);
    }


    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <ScrollAnimation
                animateIn="fadeInLeft"
                animateOnce={true}
                delay={300 / (id + 1)}
                duration={1.5 / (id + 1)}
                className="skill"

            >
                {
                    isHovered && <IconDescription skill={skill} />
                }
                <span className={`${iconClass} skill-icon`} />
            </ScrollAnimation >
        </div>
    )
}
