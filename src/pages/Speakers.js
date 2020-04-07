import React from 'react';

// Components
import PageTitle from '../components/PageTitle/PageTitle';
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';

const Speakers = () => {
    return (
        <>
            <PageTitle>Speakers</PageTitle>
            <SectionGrid>
                <InfoBox
                    title="Jochan Bach"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                    typeSpeakers
                />
                <InfoBox
                    title="John Cobra"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                    typeSpeakers
                />
                <InfoBox
                    title="Miro Slav"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                    typeSpeakers
                />
                <InfoBox
                    title="Dinco Dan"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                    typeSpeakers
                />
                <InfoBox
                    title="Johana Gun"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                    typeSpeakers
                />
                <InfoBox
                    title="Unknown Artist"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                    typeSpeakers
                />
            </SectionGrid>
        </>
    );
}

export default Speakers;