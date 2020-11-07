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
                        <span>" </span>¡Hola! Mi nombre es Fabrizio, soy un desarrollador web en constante formación. Me apasionan
                        el diseño y la programación, y siempre estoy ansioso de aprender nuevas herramientas para
                        mejorar mis capacidades. Al final de la página está mi información de contacto para cualquier
                        pregunta que quieras hacerme. Un saludo!<span> "</span>
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
                CVState && <img className="cv" src="./images/cv.png" alt="cv" />
            }
        </Fragment>
    )
}
