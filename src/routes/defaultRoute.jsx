import React from 'react'
import { Redirect, Route } from 'react-router'
const DefaultRoute = () => {
    const userData = localStorage.getItem('userData')
    return (
        <Route render={() => userData && userData.length > 0 ? (
            <Redirect to={
                {
                    from: '*',
                    pathname: "/dashboard",
                }
            }
            />
        ) : <Redirect to={
            {
                from: '*',
                pathname: "/signup",
            }
        }
        />} />
    )
}

export default DefaultRoute