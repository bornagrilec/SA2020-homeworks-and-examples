import React, { useState, useEffect } from 'react';
import eventsMock from '../lib/events';

// Components
import PageTitle from '../components/PageTitle/PageTitle';
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';

const Events = () => {
    const [events, setEvents] = useState('');
    const [filteredEvents, setFilteredEvents] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
            setFilteredEvents(eventsMock);
        }, 1000)
    }, []);

    const handleSearch = (value) => {
        const filteredResult = filteredEvents.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
        setEvents(filteredResult);
    }

    return (
        <>
            <PageTitle>Events</PageTitle>
            <SearchBar
                placeholder="Search events..."
                disabled={events ? false : true}
                onValueChange={handleSearch}
            />
            <SectionGrid>
                {events ? (
                    events.map((event, index) => (
                        <InfoBox
                            key={index}
                            title={event.title}
                            location={event.location}
                            dateTime={event.dateTime}
                            about={event.about}
                            btnText="Register for the event"
                        />)
                    )
                ) : (<Loader />)
                }
            </SectionGrid>
        </>
    );
}

export default Events;