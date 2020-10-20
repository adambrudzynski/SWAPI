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

export default function VehicleFilter({
  filters,
  handleFilters,
  resetFilters,
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
    </div>
  );
}
