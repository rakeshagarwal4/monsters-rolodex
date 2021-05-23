import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, onSearchChange }) => (
  <input
    className="search"
    type="search"
    placeholder="Search Monsters"
    onChange={onSearchChange}
  />
);
