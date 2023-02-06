import React from "react";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form className="SearchForm">
        <input id="city" type="city" placeholder="🔍   Type your city" />
        <input id="search" type="submit" />
      </form>
    </div>
  );
}
