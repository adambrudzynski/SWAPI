import React, {useCallback, useEffect, useState, useRef} from 'react';
import PersonCard from './PersonCard';
import {Person} from './types';
import PeopleFilter from './PeopleFilter';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/api/apiActions';

interface PeopleState {
  data: Person[] | [];
  nextURL: string | null;
  loading: boolean;
  error: string | boolean;
}

const defaultFilters = {
  search: '',
  gender: '',
};

export function PeopleList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const people = useSelector(({people}: {people: PeopleState}) => people.data);
  const nextURL = useSelector(({people}: {people: PeopleState}) => people.nextURL);
  const loading = useSelector(({people}: {people: PeopleState}) => people.loading);
  const error = useSelector(({people}: {people: PeopleState}) => people.error);
  const observer = useRef<any>(null);

  useEffect(() => {
    people.length === 0 && dispatch(fetchData('https://swapi.dev/api/people/'));
  }, []);

  const handleFilters = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const lastElementRef = useCallback(
    (element) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextURL) {
          dispatch(fetchData(nextURL));
        }
      });
      if (element && observer.current) observer.current.observe(element);
    },
    [loading, nextURL, dispatch]
  );

  const resetFilters = () => setFilters(defaultFilters);

  const searching = (element: Person) => {
    return element.name.toLowerCase().includes(filters.search.toLowerCase());
  };
  const filtering = (element: Person) => {
    return filters.gender === '' ? element : element.gender === filters.gender;
  };
  return (
    <>
      <PeopleFilter
        filters={filters}
        handleFilters={handleFilters}
        resetFilters={resetFilters}
      />
      <div className="list-container">
        {people &&
          (people as Person[])
            .filter(searching)
            .filter(filtering)
            .map((person: Person, index: number) => {
              return <PersonCard key={person.name} person={person} />;
            })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={lastElementRef}></div>
    </>
  );
}
