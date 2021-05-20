import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
