import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../layout/Dashboard'
import CalenderPage from '../pages/Calender'
import Constraction from '../pages/Constraction'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Todo from '../pages/Todo'
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
                <AuthenticationRoute path="/" exact>
                    <Dashboard>
                        <Main></Main>
                    </Dashboard>
                </AuthenticationRoute>
                <AuthenticationRoute path="/attendance">
                    <Dashboard>
                        <Constraction></Constraction>
                    </Dashboard>
                </AuthenticationRoute>
                <AuthenticationRoute path="/todo">
                    <Dashboard>
                        <Todo></Todo>
                    </Dashboard>
                </AuthenticationRoute>
                <AuthenticationRoute exact path="/agenda">
                    <Dashboard>
                        <CalenderPage></CalenderPage>
                    </Dashboard>
                </AuthenticationRoute>
                <AuthenticationRoute path="/chat">
                    <Dashboard>
                        <Constraction></Constraction>
                    </Dashboard>
                </AuthenticationRoute>
                <AuthenticationRoute path="/meeting">
                    <Dashboard>
                        <Constraction></Constraction>
                    </Dashboard>
                </AuthenticationRoute>
            </Switch>
        </Router>
    )
}

export default Routes