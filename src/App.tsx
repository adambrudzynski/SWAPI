import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Details from './components/common/Details';
import {PeopleList} from './components/People/PeopleList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/people/:name" exact render={(props) => <Details {...props} apiNode='people' />}></Route>
          <Route path="/films/:name" exact render={(props) => <Details {...props} apiNode='films' />}></Route>
          <Route path="/planets/:name" exact render={(props) => <Details {...props} apiNode='planets' />}></Route>
          <Route path="/species/:name" exact render={(props) => <Details {...props} apiNode='species' />}></Route>
          <Route path="/starships/:name" exact render={(props) => <Details {...props} apiNode='starships' />}></Route>
          <Route path="/vehicles/:name" exact render={(props) => <Details {...props} apiNode='vehicles' />}></Route>
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
