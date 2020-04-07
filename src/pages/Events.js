import React from 'react';

// Components
import PageTitle from '../components/PageTitle/PageTitle';
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';

const Events = () => {
    return (
        <>
            <PageTitle>Events</PageTitle>
            <SectionGrid>
                <InfoBox
                    title="How can we benefit from React Redux"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                />
                <InfoBox
                    title="JSX means JavaScript and XML"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                />
                <InfoBox
                    title="Why to use Styled Components with React"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                />
                <InfoBox
                    title="What is the difference between Functional and Class components"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                />
                <InfoBox
                    title="Components and Lifecycle methods"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                />
                <InfoBox
                    title="Hooks, Mobx, context API in React"
                    location="Dvorana D09"
                    dateTime="24.3. u 13:45h"
                    about="Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one."
                />
            </SectionGrid>
        </>
    );
}

export default Events;