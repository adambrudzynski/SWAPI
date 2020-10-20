import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import {AuthContext} from './components/Auth/Auth';
import {Protected} from './components/Auth/Protected';
import Details from './components/common/Details';
import {FilmsList} from './components/Films/FilmsList';
import Navbar from './components/Navbar';
import {PeopleList} from './components/People/PeopleList';
import {PlanetsList} from './components/Planets/PlanetsList';
import {SpeciessList} from './components/Species/SpeciesList';
import {StarshipsList} from './components/Starships/StarshipList';
import {VehiclesList} from './components/Vehicles/VehicleList';

function App() {
  const tokens = localStorage.getItem('tokens');
  const currentTokens = tokens ? JSON.parse(tokens) : null;
  const [authTokens, setAuthTokens] = useState(currentTokens);

  const setTokens = (data: string) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
      <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Protected>
        <Router>
        <Navbar/>
          <div className="App">
            <Switch>
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
              <Redirect to="/people" />
            </Switch>
          </div>
        </Router>
      </Protected>
    </AuthContext.Provider>
  );
}

export default App;
