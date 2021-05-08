import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ LoadComponent, ...rest }) => {
    const userData = localStorage.getItem('userData')
    return (
        <Route

            render={
                ({ props }) => userData && userData.length ? (<
                    Redirect to={
                        {
                            pathname: "/dashboard"
                        }
                    }
                />
                ) : (
                    < LoadComponent {...props}
                    />
                )
            }

        />
    )
}
export default PublicRoute