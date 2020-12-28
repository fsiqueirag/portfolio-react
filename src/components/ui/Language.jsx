import React from 'react';
import './language.css';

export const Language = ({setLanguage}) => {

    const handleClickEspanol = () => {
        setLanguage("espanol")
    }

    const handleClickIngles = () => {
        setLanguage("ingles")
    }

    return (
        <div className="row language-container">
            <img className="col-6 icono-idioma" src="./images/espanol.png" alt="ícono español" onClick={handleClickEspanol} />
            <img className="col-6 icono-idioma" src="./images/ingles.png" alt="ícono inglés" onClick={handleClickIngles} />
        </div>
    )
}
