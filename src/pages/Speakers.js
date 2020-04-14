import React, { useState, useEffect } from 'react';
import speakersMock from '../lib/mock/speakers';

// Components
import PageTitle from '../components/PageTitle/PageTitle';
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';

// Images 
import IconSpeaker from '../assets/img/speakers-icon.png';

const Speakers = () => {
    // We need to have initial states for speakers and filteredSpeakers.
    // This is because if we filter initial state of speakers, our array of object
    // will exclude items from the original array according to serach result. 
    // On that way, when you try to clear search bar, items wouldn't be rendered
    // like it should. Solution is to create initial state for filteredSpeakers
    // which will be copy of original speakers array when first render occured.
    // Then, when we searching, we must use filteredArray and never set filteredSpeakers state
    // again, just change state of speakers original array during each handleSearch call.
    const [speakers, setSpeakers] = useState('');
    const [filteredSpeakers, setFilteredSpeakers] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setSpeakers(speakersMock);
            setFilteredSpeakers(speakersMock);
        }, 1000)
    }, []);

    const handleSearch = (value) => {
        const filteredResult = filteredSpeakers.filter(speaker => speaker.title.toLowerCase().includes(value.toLowerCase()));
        setSpeakers(filteredResult);
    }

    return (
        <>
            <PageTitle>Speakers</PageTitle>
            <SearchBar
                placeholder="Search speakers..."
                disabled={speakers ? false : true}
                onValueChange={handleSearch} />
            <SectionGrid>
                {speakers ? (
                    speakers.map((speaker, index) => (
                        <InfoBox
                            key={index}
                            icon={IconSpeaker}
                            title={speaker.title}
                            about={speaker.about}
                            btnText="Follow speaker"
                            typeSpeakers
                        />
                    ))
                ) : (<Loader />)}
            </SectionGrid>
        </>
    );
}

export default Speakers;