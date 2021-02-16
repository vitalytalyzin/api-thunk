import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ServiceList from './components/ServiceList/ServiceList';
import ServiceEditPage from './components/ServiceEditPage/ServiceEditPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/service' />
        </Route>
        <Route path="/service/:id" component={ServiceEditPage} />
        <Route path="/service" component={ServiceList}/>
      </Switch>
    </Router>
  );
}

export default App;
