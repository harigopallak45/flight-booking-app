import React, { useState } from 'react';
import "../css/search.css"

function Searchform() {
  const [search, setSearch] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="From"
        value={search.from}
        onChange={(e) => setSearch({ ...search, from: e.target.value })}
      />
      <input
        type="text"
        placeholder="To"
        value={search.to}
        onChange={(e) => setSearch({ ...search, to: e.target.value })}
      />
      <input
        type="date"
        placeholder="Departure"
        value={search.departure}
        onChange={(e) => setSearch({ ...search, departure: e.target.value })}
      />
      <input
        type="date"
        placeholder="Return"
        value={search.return}
        onChange={(e) => setSearch({ ...search, return: e.target.value })}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default Searchform;