import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Home from './pages/Home';
import ListEvents from './pages/ListEvents';
import ShowProfile from './pages/ShowProfile';
import AddEvent from './pages/AddEvent';
import Dashboard from './pages/Dashboard';
import ShowEvent from './pages/ShowEvent';

function App() {
  return (
    <>
    <Link to = {'/'}>Home</Link>
    <Link to = {'/events'}>Events</Link>
    <Link to = {'/add-event'}>Add Event</Link>
    <Link to = {'/dashboard'}>Dashboard</Link>
      <Switch>
        <Route path='/events/:eventid' component={ShowEvent} />
        <Route path='/events' component={ListEvents} />
        <Route path='/add-event' component={AddEvent} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profiles/:profileid' component={ShowProfile} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
