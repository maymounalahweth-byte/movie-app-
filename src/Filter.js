import React from "react";

const Filter = ({ titleFilter, rateFilter, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Rechercher par titre"
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <label>
        Note minimale
        <select value={rateFilter} onChange={(e) => onRateChange(Number(e.target.value))}>
          <option value={0}>Toutes</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} ★ et plus
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filter;