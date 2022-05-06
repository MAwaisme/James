
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../../components/header/Header';
// import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => state.Auth)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            user ?
                <>

                    <Header />
                    <Component {...props} />
                </>
                : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;