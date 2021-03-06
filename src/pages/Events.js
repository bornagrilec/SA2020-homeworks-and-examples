import React, { useState, useEffect } from 'react';
import { getEvents } from '../api/events';
import { PageTitle } from '../lib/styles/GeneralStyles';

// Components
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';

// Images
import IconEvent from '../assets/img/event-icon.png';

const Events = () => {
    const [events, setEvents] = useState('');
    const [filteredEvents, setFilteredEvents] = useState('');

    useEffect(() => {
        getEvents(localStorage.getItem('token')).then(({ events }) => {
            setEvents(events);
            setFilteredEvents(events);
        })
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
                    events.map(event => (
                        <InfoBox
                            key={event._id}
                            icon={IconEvent}
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