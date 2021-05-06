import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ LoadComponent, ...rest }) => {
    const userData = localStorage.getItem('userData')
    return (
        <React.Fragment>
            <Route {...rest}

                render={
                    ({ props }) => userData && userData.length > 0 ? (
                        < LoadComponent {...props}
                        />) : (<
                            Redirect to={
                                {
                                    pathname: "/signup",
                                }
                            }
                        />
                    )
                }

            />
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
        </React.Fragment>
    )
}
export default PrivateRoute