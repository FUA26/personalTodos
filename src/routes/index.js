import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Main from '../pages/Main'
import AuthenticationRoute from './auth-router'


const Routes = () => {
    return (
        <Router>
                <Route exact path="/login">
                    <Login></Login>
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