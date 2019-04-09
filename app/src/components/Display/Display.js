import React from 'react';

const Display = (props) => {
    return (
        <>
            <h1>Balls: {props.balls ? props.balls : 0} | Strikes: {props.strikes ? props.strikes : 0}</h1>
        </>
    )
}

export default Display;