import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import {PrivateRoute} from './components/Auth/PrivateRoute';
import Details from './components/common/Details';
import {FilmsList} from './components/Films/FilmsList';
import Navbar from './components/Navbar';
import {PeopleList} from './components/People/PeopleList';
import {PlanetsList} from './components/Planets/PlanetsList';
import {SpeciessList} from './components/Species/SpeciesList';
import {StarshipsList} from './components/Starships/StarshipList';
import {VehiclesList} from './components/Vehicles/VehicleList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute>
            <Route
              path="/people/:name"
              exact
              render={(props) => <Details {...props} apiNode="people" />}
            ></Route>
            <Route
              path="/films/:name"
              exact
              render={(props) => <Details {...props} apiNode="films" />}
            ></Route>
            <Route
              path="/planets/:name"
              exact
              render={(props) => <Details {...props} apiNode="planets" />}
            ></Route>
            <Route
              path="/species/:name"
              exact
              render={(props) => <Details {...props} apiNode="species" />}
            ></Route>
            <Route
              path="/starships/:name"
              exact
              render={(props) => <Details {...props} apiNode="starships" />}
            ></Route>
            <Route
              path="/vehicles/:name"
              exact
              render={(props) => <Details {...props} apiNode="vehicles" />}
            ></Route>
            <Route path="/people" exact>
              <PeopleList />
            </Route>
            <Route path="/planets" exact>
              <PlanetsList />
            </Route>
            <Route path="/films" exact>
              <FilmsList />
            </Route>
            <Route path="/starships" exact>
              <StarshipsList />
            </Route>
            <Route path="/vehicles" exact>
              <VehiclesList />
            </Route>
            <Route path="/species" exact>
              <SpeciessList />
            </Route>
          </PrivateRoute>
         
        </Switch>
        <Redirect from="/" to="/people" />
      </div>
    </Router>
  );
}

export default App;
