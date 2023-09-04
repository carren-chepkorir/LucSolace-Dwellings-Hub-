//This function filters houses based on selected country and navigate to a different url using useNavigate hook.
import React from "react";
import { useNavigate } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
  const navigate = useNavigate();
  //creates a list of countries from and initializes an empty array.
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
  countries.unshift(null);
  const onSearchChange = (e) => {
    const country = e.target.value;
    navigate("/SearchResults/" + country);
  };
  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your Dream house in the country
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
