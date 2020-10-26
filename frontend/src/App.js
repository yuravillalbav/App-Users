import React, {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootswatch/dist/flatly/bootstrap.min.css';

import Home from './components/Home';
import Navigation from './components/Navigation';
import ListUsers from './components/ListUsers';
import FormUser from './components/FormUser';


const App = () => {

  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact  component={Home} /> 
          <Route path='/form' component={FormUser} /> 
          <Route path='/list' component={ListUsers} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;