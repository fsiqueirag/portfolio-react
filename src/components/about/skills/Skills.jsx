import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Skill } from './Skill';

const iconClasses = [
    {
        iconClass: "fab fa-html5",
        skill: 'HTML5'
    },
    {
        iconClass: "fab fa-css3-alt",
        skill: 'CSS3'
    },
    {
        iconClass: "fab fa-js-square",
        skill: 'JS E6'
    },
    {
        iconClass: "fab fa-bootstrap",
        skill: 'Bootstrap'
    },
    {
        iconClass: "fab fa-git-alt",
        skill: 'Git'
    },
    {
        iconClass: "fab fa-node-js",
        skill: 'Node'
    },
    {
        iconClass: "fab fa-react",
        skill: 'React'
    },
]

export const Skills = () => {
    return (
        <div>
            <ScrollAnimation
                animateIn='fadeIn'
                animateOnce={true}
            >
                <h3 className="skills-title">Tecnologías que manejo</h3>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn='fadeIn'
                animateOnce={true}
                className="skills-container">
                {iconClasses.map(({ iconClass, skill }, index) => {
                    return <Skill id={index} key={index} iconClass={iconClass} skill={skill} />
                })}
            </ScrollAnimation>
        </div>
    )
}
