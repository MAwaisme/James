import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import LandingPage from '../../screens/landingPage/LandingPage';
import PublicRoute from './PublicRoute';
import SignUp from '../../screens/signUp/SignUp';
import PrivateRoute from './PrivateRoute'
import Dashboard from '../../screens/Dashboard/Dashboard';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>
                <PublicRoute exact path='/signin' component={LandingPage} ></PublicRoute>
                <PublicRoute exact path='/signup' component={SignUp} ></PublicRoute>
            </Switch>
        </Router>
    )
}

export default Routes

