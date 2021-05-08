import { Box } from '@material-ui/core';
import React, { useState } from 'react';

const CounterComponent = () => {

    const [counterVal, setCounterVal] = useState(1);

    const increementCounter = () => {
        setCounterVal(counterVal + 1);
    }

    const decreementCounter = () => {
        if (counterVal > 0) {
            setCounterVal(counterVal - 1);
        }
    }

    return (
        <Box style={{ display: "flex", width: '4.3rem', justifyContent: 'space-between', alignItems: 'center', borderRadius: '3px', border: "1px solid #cdcdcd", padding: "2px" }}>
            <div onClick={decreementCounter} style={{ width: "1.5rem", textAlign: 'center' }}>
                <span style={{ fontSize: "1.2rem", color: counterVal > 0 ? "#02abd6" : "#ddd" }}>-</span>
            </div>
            <div style={{ display: "flex", alignItems: 'center', marginTop: "4px", justifyContent: "center", }}>{counterVal}</div>
            <div style={{ width: "1.5rem", textAlign: 'center' }} onClick={increementCounter}>
                <span style={{ fontSize: "1.2rem", color: "#02abd6" }}>+</span>
            </div>
        </Box>
    )
}

export default CounterComponent;