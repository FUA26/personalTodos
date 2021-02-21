import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../layout/Dashboard'
import CalenderPage from '../pages/Calender'
import Login from '../pages/Login'
import Main from '../pages/Main'
import AuthenticationRoute from './auth-router'


const Routes = () => {
    return (
        <Router>
                <Route path="/login">
                    <Login></Login>
                    {/* <Dashboard>
                        <Main></Main>
                    </Dashboard> */}
                </Route>
            <Switch>
                {/* <AuthenticationRoute path="/" exact>
                    <Main></Main>
                </AuthenticationRoute> */}
                <Route path="/todo">
                    <Dashboard>
                        <Main></Main>
                    </Dashboard>
                </Route>
                <Route exact path="/agenda">
                    <Dashboard>
                        <CalenderPage></CalenderPage>
                    </Dashboard>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes