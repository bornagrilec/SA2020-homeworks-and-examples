import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section class="SectionHero">
            <div class="SectionHero-DataContainer">
                <h1 class="SectionHero-Title">Tjedan karijera</h1>
                <span class="SectionHero-Organizer">FOI</span>
                <p class="SectionHero-Date">20.10.2020. - 26.10.2020.</p>
                <a href="#" class="Btn">Prijavi se</a>
            </div>
        </section>
    );
}

export default Hero;