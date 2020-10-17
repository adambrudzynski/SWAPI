import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import PersonDetails from './components/People/Person';
import {PeopleList} from './components/People/PeopleList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/people/:name" exact component={PersonDetails}>
        
        </Route>
          <Route path="/people" exact>
            <PeopleList />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
