import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ LoadComponent, ...rest }) => {
    const userData = localStorage.getItem('userData')
    return (
        <Route

            render={
                ({ props }) => userData ? (<
                    Redirect to={
                        {
                            pathname: "/"
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