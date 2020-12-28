import React from 'react';
// import { Language } from '../ui/Language';
import './home.css';

// export const Home = ({language, setLanguage}) => {
//     return (
//         <section id="home">
//             <Language setLanguage={setLanguage} />
//             <div>
//                 <h1>Fabrizio Siqueira</h1>

//                 {
//                     language === "espanol"
//                     ?
//                         <p>Desarrollador Web Front End</p>
//                     :
//                         <p>Front End Web Developer</p>
//                 }
//             </div>
//         </section>
//     )
// }

export const Home = () => {
    return (
        <section id="home">
            <div>
                <h1>Fabrizio Siqueira</h1>
                <p>Desarrollador Web Front End</p>
            </div>
        </section>
    )
}