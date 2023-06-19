import React, { useEffect, useState } from 'react'

const FunctionalClock = () => {

    let initialState = {
        date: new Date(), 
        age: 0,
        name: 'Juan', 
        last: 'Gregorio'
    }

    const [state, setState] = useState(initialState);

    const tick = () => {
        setState((prevState) => {
            let age = prevState.age + 1;
            return {
            ...prevState,
            date: new Date(),
            age,
            }
        });
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            tick();
            console.log('Edad actualizada');
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
    <div>
        <h2>
            Hora Actual:
            {state.date.toLocaleTimeString()}
        </h2>
        <h3>
            {state.name} {state.last}
        </h3>
        <h1>Edad: {state.age}</h1>
    </div>
    )
}

export default FunctionalClock