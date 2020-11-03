import React, {useEffect, useState, useRef} from 'react';
import Card from './PersonCard';
import {Person} from './types';
import PeopleFilter from './PeopleFilter';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/api/apiActions';
import useLoadMore from '../hooks/useLoadMore';
import { IRootState } from '../redux/rootReducer';

const defaultFilters = {
  search: '',
  gender: '',
};

export function PeopleList() {
  const [filters, setFilters] = useState(defaultFilters);
  const dispatch = useDispatch();
  const list = useSelector<IRootState, Person[]>(({people}) => people.data);
  const nextURL = useSelector<IRootState, string | null>(({people}) => people.nextURL);
  const loading = useSelector<IRootState, boolean>(({people}) => people.loading);
  const error = useSelector<IRootState, boolean>(({people})  => people.error);
  const observer = useRef<any>(null);
  const loadMore = useLoadMore(observer, nextURL, 'PEOPLE', loading);

  useEffect(() => {
    list.length === 0 &&
      dispatch(fetchData('https://swapi.dev/api/people/', 'PEOPLE'));
  }, [dispatch, list]);

  const handleFilters = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

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
        {list &&
          (list as Person[])
            .filter(searching)
            .filter(filtering)
            .map((listItem: Person, index: number) => {
              return <Card key={listItem.name} person={listItem} />;
            })}
      </div>
      {loading && <>Loading....</>}
      {error && <>"Error occured, try again"</>}
      <div ref={loadMore}></div>
    </>
  );
}
