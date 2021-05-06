import { Typography } from '@material-ui/core'
import React from 'react'

const NotFoundPage = () => {
    return (
        <div style={{ height: '100vh', backgroundImage: 'linear-gradient(to left bottom, #adcbc3, #45c4d8, #00b2ff, #5e8bff, #eb12e2)', color: 'white', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h1">
                OOps! The Page You are looking for does not exist.
            </Typography>
        </div>
    )
}
export default NotFoundPage