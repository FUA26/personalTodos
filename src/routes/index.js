import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../layout/Dashboard'
import Login from '../pages/Login'
import Main from '../pages/Main'
import AuthenticationRoute from './auth-router'


const Routes = () => {
    return (
        <Router>
                <Route exact path="/login">
                    {/* <Login></Login> */}
                    <Dashboard>
                        <Main></Main>
                    </Dashboard>
                </Route>
            <Switch>
                <AuthenticationRoute path="/" exact>
                    <Main></Main>
                </AuthenticationRoute>
            </Switch>
        </Router>
    )
}

export default Routes