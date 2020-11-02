import { combineReducers } from 'redux'
import { apiReducerFactory } from './api/apiReducer'
import authReducer from './auth/authReducer'


const rootReducer = combineReducers({
    people: apiReducerFactory("PEOPLE"),
    films: apiReducerFactory("FILMS"),
    planets: apiReducerFactory("PLANETS"),
    starships: apiReducerFactory("STARSHIPS"),
    vehicles: apiReducerFactory("VEHICLES"),
    species: apiReducerFactory("SPECIES"),
    auth: authReducer
})
export type IRootState = ReturnType<typeof rootReducer>
export default rootReducer