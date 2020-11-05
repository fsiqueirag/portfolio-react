import React from 'react';
import { SectionTitle } from '../SectionTitle';
import { Features } from './features/Features';
import { Profile } from './profile/Profile';
import { Skills } from './skills/Skills';

export const About = () => {
    return (
        <section className="about-section" id="about">
            <SectionTitle title="SOBRE MI" />
            <Profile />
            <Skills />
            <Features />
        </section>
    )
}
