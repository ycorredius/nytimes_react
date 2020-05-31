import React from 'react';
import BookContainer from '../containters/Book_Container'
import BestsellerShow from '../components/nytimes_books/bestsellerShow'
import { Switch, Route } from 'react-router';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path={"/bestsellers"} render={() => <BookContainer />} />
            <Route exact path={"/bestsellers/:bookId"} render={showProps => <BestsellerShow {...showProps}/>}/>
        </Switch>
    </div>
)

export default Routes;