import React from 'react';

//Components
import Hero from '../components/Hero/Hero';
import SectionMore from '../components/SectionMore/SectionMore';
import About from '../components/About/About';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import Card from '../components/Card/Card';
import SectionLastYear from '../components/SectionLastYear/SectionLastYear';

// Images
import ImgAbout from '../assets/img/about.jpg'
import ImgSpeakers from '../assets/img/speakers.jpg';
import ImgAgenda from '../assets/img/calendar.jpg';
import ImgPartner from '../assets/img/partner.jpg';

const Home = () => {
    return (
        <>
            <Hero />
            <SectionMore>
                <About />
                <CardsContainer>
                    <Card image={ImgAbout} alt="About">O tjednu karijera</Card>
                    <Card image={ImgSpeakers} alt="Speakers">Predavači</Card>
                    <Card image={ImgAgenda} alt="Agenda">Raspored</Card>
                    <Card image={ImgPartner} alt="Partners">Partneri</Card>
                </CardsContainer>
            </SectionMore>
            <SectionLastYear />
        </>
    );
}

export default Home;