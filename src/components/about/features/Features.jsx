import React from 'react';
import { Feature } from './Feature';

const icons = [
    {
        classText: "fas fa-tablet-alt feature-icon",
        title: "Responsividad",
        content: "Una de mis prioridades es que los diseños sean 100% responsivos, que funcionen en todo tipo de dispositivos."
    },
    {
        classText: "fab fa-connectdevelop feature-icon",
        title: "Dinamismo",
        content: "Suelo enfocarme en realizar interfaces dinámicas que no sólo resulten estéticamente atractivas, sino que ayuden a dirigir la atención a los elementos más importantes."
    },
    {
        classText: "fas fa-sitemap feature-icon",
        title: "Estructura",
        content: "Siempre procuro que mi código sea limpio, ordenado, y fácil de entender."
    }
]

export const Features = () => {
    return (
        <div className="container-fluid features">
            <div className="row">
                {
                    icons.map(({ classText, title, content }, index) => (
                        <Feature
                            key={index}
                            classText={classText}
                            title={title}
                            content={content}
                        />
                    ))
                }
            </div>
        </div>
    )
}
