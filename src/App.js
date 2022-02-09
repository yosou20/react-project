import React from 'react';
import './index.css';
import {Route, Switch} from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
      <Route path ='/'exact>
        <AllMeetup/>
      </Route>
      <Route path = '/favorites'>
        <Favorites/>
      </Route>
      <Route path = '/new-meetup'>
        <NewMeetup/>
      </Route>

      </Switch>
         <h1>Hello second project !!!!!</h1>

    </div>
  );
}

export default App;
