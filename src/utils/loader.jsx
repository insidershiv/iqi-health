import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <MoonLoader color="#36D7B7" />
        </div>
    )
}
export default Loader