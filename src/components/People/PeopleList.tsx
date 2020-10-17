import React, {useEffect, useState} from 'react';
import Pagination from './Pagination';
import PokemonCard from './PersonCard';
import './card.css';

export interface Person {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[] | [];
  species: string[] | [];
  starships: string[] | [];
  url: string;
}

export interface apiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: [Person];
}

export function PeopleList() {
  const [people, setPeople] = useState<Person[] | string[]>([]);
  const [currentPage, setCurrentPage] = useState<string>(
    'https://swapi.dev/api/people/'
  );
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage]);

  const handlePagination = (action: 'next' | 'prev'): void => {
    if (nextPage && action === 'next') {
      setCurrentPage(nextPage);
    } else if (prevPage && action === 'prev') {
      setCurrentPage(prevPage);
    }
  };

  const fetchPokemons = async (url: string) => {
    try {
      setLoading(true);
      const peopleApi = await fetch(url);
      const peopleList: apiResponse = await peopleApi.json();
      setPeople(peopleList.results);
      setNextPage(peopleList.next);
      setPrevPage(peopleList.previous);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) return <> "Loading" </>;
  if (error) return <>"Error occured, try again"</>;

  return (
    <>
      <Pagination
        handlePagination={handlePagination}
        next={nextPage ? true : false}
        prev={prevPage ? true : false}
      />
      <div className="list-container">
        {(people as Person[]).map((person: Person) => {
          return <PokemonCard key={person.name} person={person} />;
        })}
      </div>
    </>
  );
}
