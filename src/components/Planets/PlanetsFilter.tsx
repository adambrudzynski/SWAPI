import React from 'react';

interface Props {
  filters: Filters;
  handleFilters: (name: string, value: string) => void;
  resetFilters: () => void;
}

type Filters = {
  search: string;
  gender: string;
};

export default function PeopleFilter({
  filters,
  handleFilters,
  resetFilters,
}: Props) {
  return (
    <div  className='filters'>
      <input
        placeholder="Search..."
        type="text"
        name="search"
        value={filters.search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleFilters('search', e.target.value)
        }
      />
      <select
        name="gender"
        value={filters.gender}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          handleFilters(e.target.name, e.target.value)
        }
      >
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="n/a">n/a</option>
      </select>

      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
}
