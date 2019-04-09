import React from 'react';

const Display = (props) => {
    return (
        <>
            {props.balls && props.strikes ? 
                <h1>Balls: <span data-testid="balls-count">{props.balls}</span> | Strikes: <span data-testid="strikes-count">{props.strikes}</span></h1>
            :
                <h1>Balls: 0 | Strikes: 0</h1>
            }
        </>
    )
}

export default Display;