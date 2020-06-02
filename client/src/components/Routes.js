import React from 'react';
import Home from '../components/Home';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';
import BestsellerShow from '../components/nytimes_books/bestsellerShow';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router';
import BookContainer from '../containers/bookContainer'

const Routes = () => (
    <div>
        <Switch>
            <Route exact path={"/bestsellers"} render={() => <BookContainer />} />
            <Route exact path={"/bestsellers/:bookId"} render={showProps => <BestsellerShow {...showProps}/>}/>
            <Route exact path={"/"} render={() => <Home/>}/>
            <Route exact path={"/signup"} render={ routeProps => <Signup {...routeProps}/>} />
            <Route exact path={"/login"} render={routeProps => <Login {...routeProps}/> } />
            <Route exact path={"/dashboard"} render={() => <Dashboard /> } />
        </Switch>
    </div>
)

export default Routes;