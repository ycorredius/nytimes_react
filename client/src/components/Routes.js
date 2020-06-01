import React from 'react';
import BookContainer from '../containters/Book_Container'
import Home from '../components/Home'
import Signup from '../components/sessions/Signup'
import Login from '../components/sessions/Login'
import BestsellerShow from '../components/nytimes_books/bestsellerShow'
import { Switch, Route } from 'react-router';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path={"/bestsellers"} render={() => <BookContainer />} />
            <Route exact path={"/bestsellers/:bookId"} render={showProps => <BestsellerShow {...showProps}/>}/>
            <Route exact path={"/"} render={() => <Home/>}/>
            <Route exact path={"/signup"} render={ () => <Signup/>} />
            <Route exact path={"/login"} render={() => <Login/> } />
        </Switch>
    </div>
)

export default Routes;