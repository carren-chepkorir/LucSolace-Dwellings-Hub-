import React from "react";

import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = ({ allHouses }) => {
  const { country } = useParams();
  const FilteredHouses = allHouses.filter((h) => h.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover custom-table">
        <tbody>
          {FilteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
