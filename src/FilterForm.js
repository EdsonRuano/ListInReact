import React from 'react';

const FilterForm = ({ onFilterChange, onSortChange, onSearchChange }) => {
  const handleFilterChange = (e) => {

    if (onFilterChange && typeof onFilterChange === 'function') {

      const userId = parseInt(e.target.value, 10);
      onFilterChange(userId);
    }
  };

  return (
    <div className="mb-3">
      <form>
        <label className="form-label fw-bold">Filtrar por User ID:</label>
        <input className='form-control' type="number" onChange={handleFilterChange} />

        <label className="form-label fw-bold">Ordenar por título:</label>
        <select className='form-select' onChange={onSortChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>

        <label className="form-label fw-bold">Filtrar por texto del body:</label>
        <input className='form-control' type="text" onChange={onSearchChange} />
      </form>
    </div>
  );
};

export default FilterForm;
