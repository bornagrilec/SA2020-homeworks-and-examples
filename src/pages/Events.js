import React, { useState, useEffect } from 'react';
import eventsMock from '../lib/events';

// Components
import PageTitle from '../components/PageTitle/PageTitle';
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';

const Events = () => {
    const [events, setEvents] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1000)
    }, []);

    return (
        <>
            <PageTitle>Events</PageTitle>
            <SectionGrid>
                {events ? (
                    events.map((event, index) => (
                        <InfoBox
                            key={index}
                            title={event.title}
                            location={event.location}
                            dateTime={event.dateTime}
                            about={event.about}
                        />)
                    )
                ) : (<Loader />)
                }
            </SectionGrid>
        </>
    );
}

export default Events;