import React from "react";
import '../CSS/searchbar.css';

function Searchbar() {
  return (
    <form role="search" className="community-search-form">
      <label className="community-search-label" for="search">Search for stuff</label>
      <input
        className="community-search-input"
        id="search"
        type="search"
        placeholder="Find People"
        autofocus
        required
      />
      <button className="community-search-button" type="submit">Go</button>
    </form>
  );
}

export default Searchbar;
