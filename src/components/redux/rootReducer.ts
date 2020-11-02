import { combineReducers } from 'redux'
import { apiReducerFactory } from './api/apiReducer'
import authReducer from './auth/authReducer'


export default combineReducers({
    people: apiReducerFactory("PEOPLE"),
    films: apiReducerFactory("FILMS"),
    planets: apiReducerFactory("PLANETS"),
    starships: apiReducerFactory("SPECIES"),
    vehicles: apiReducerFactory("STARSHIPS"),
    species: apiReducerFactory("VEHICLES"),
    auth: authReducer
})