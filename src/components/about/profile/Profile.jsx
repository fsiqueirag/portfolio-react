import React, { Fragment, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../about.css';

export const Profile = () => {

    const [CVState, setCVState] = useState(false);
    const handleShow = () => {
        setCVState(!CVState);
    }

    return (
        <Fragment>
            <div className="profile">
                <ScrollAnimation
                    animateIn="flipInY"
                    animateOnce={true}
                >
                    <img className="profile-pic" src="./images/profile-pic.png" alt="profile pic" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <p className="testimony">
                        <span>" </span>¡Hola! Mi nombre es Fabrizio Siqueira.
                    Soy un desarrollador web en constante formación. Viva la revolución!
                    BLA bla blablablab askdasld también voté a macri blablablaby odio a
                    los nazis del orto jaja re gil<span> "</span>
                    </p>
                </ScrollAnimation>

            </div>


            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <button
                    className={`cv-button ${CVState ? "hide-cv" : "show-cv"}`}
                    onClick={handleShow}
                >
                    Mostrar / ocultar CV
                </button>
            </ScrollAnimation>


            {
                CVState && <img className="cv" src="/images/cv.jpg" alt="cv" />
            }
        </Fragment>
    )
}
