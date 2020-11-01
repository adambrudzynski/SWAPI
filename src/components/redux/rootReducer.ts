import { combineReducers } from 'redux'
import apiReducer from './api/apiReducer'
import authReducer from './auth/authReducer'


export default combineReducers({
    people: apiReducer,
    // films: apiReducer,
    // planets: apiReducer,
    // starships: apiReducer,
    // vehicles: apiReducer,
    // species: apiReducer,
    auth: authReducer
})