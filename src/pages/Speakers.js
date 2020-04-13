import React, { useState, useEffect } from 'react';
import speakersMock from '../lib/speakers';

// Components
import PageTitle from '../components/PageTitle/PageTitle';
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';

const Speakers = () => {
    const [speakers, setSpeakers] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setSpeakers(speakersMock);
        }, 1000)
    }, []);

    return (
        <>
            <PageTitle>Speakers</PageTitle>
            <SectionGrid>
                {speakers ? (
                    speakers.map((speaker, index) => (
                        <InfoBox
                            key={index}
                            title={speaker.title}
                            about={speaker.about}
                            typeSpeakers
                        />
                    ))
                ) : (<Loader />)}
            </SectionGrid>
        </>
    );
}

export default Speakers;