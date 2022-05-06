
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PublicRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => state.Auth)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            !user ?
                <>
                    <Component {...props} />
                </>
                : <Redirect to="/" />
        )} />
    );
};

export default PublicRoute;