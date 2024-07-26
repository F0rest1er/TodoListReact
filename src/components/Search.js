import React from "react";

function Search({ filter, setFilter }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default Search;
