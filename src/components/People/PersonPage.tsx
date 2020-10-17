import React from 'react'
import {Person} from './PeopleList'

interface Props {
    person: Person
}

export default function PersonPage({person}: Props) {
    return (
        <div>
            <h1>{person.name}</h1>
            <h5>Height: {person.height}</h5>
            <h5>Mass: {person.mass}</h5>
            <h5>Hair color: {person.hair_color}</h5>
            <h5>Eye color: {person.eye_color}</h5>
            <h5>Birth year: {person.birth_year}</h5>
            <h5>Gender: {person.gender}</h5>  

        </div>
    )
}
