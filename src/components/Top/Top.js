import React, { useState } from 'react';

import Down from '../Down/Down';

const Top = () => {
    const [increment, setIncrement] = useState(0);

    const handleIncrement = (incrementBy = 1) => {
        setIncrement(increment + incrementBy);
    }

    return (
        <div>
            <p>Result of increment: <strong>{increment}</strong></p>
            <Down onIncrementClick={handleIncrement} />
        </div>
    );
}

export default Top;








