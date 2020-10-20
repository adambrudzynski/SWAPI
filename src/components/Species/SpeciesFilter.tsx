import React from 'react';

interface Props {
  filters: Filters;
  handleFilters: (name: string, value: string) => void;
  resetFilters: () => void;
  options: string[];
}

type Filters = {
  search: string;
  classification : string;
};

export default function SpeciesFilter({
  filters,
  handleFilters,
  resetFilters,
  options
}: Props) {
  return (
    <div className='filters'>
      <input
        placeholder="Search..."
        type="text"
        name="search"
        value={filters.search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleFilters('search', e.target.value)
        }
      />
      <label> Classification</label>
      <select
        name="classification"
        value={filters.classification}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          handleFilters(e.target.name, e.target.value)
        }
      >
         <option value="">All</option>
        {options.map((option: string) => {
          return <option value={option}>{option}</option>;
        })}
      </select>

      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
}
