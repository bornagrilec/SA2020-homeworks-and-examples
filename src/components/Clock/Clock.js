// Functional component
import React, { useEffect, useState } from 'react';

const Clock = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let interval = setInterval(
            () => tick(),
            1000
        )
        return () => clearInterval(interval);
    }, []);

    const tick = () => {
        setDate(new Date());
    }

    return (
        <div>
            <h1>Hello World!</h1>
            <p>It is {date.toLocaleTimeString()}.</p>
        </div>
    );
}

export default Clock;

//Class component
// import React, { Component } from 'react';

// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//         }
//     }

//     componentDidMount() {
//         this.timerId = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//                 <p>it is {this.state.date.toLocaleTimeString()}.</p>
//             </div>
//         );
//     };
// }

// export default Clock;



