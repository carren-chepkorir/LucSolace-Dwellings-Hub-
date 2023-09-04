import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturedHouse from "./Components/FeaturedHouse";
import Header from "./Components/Header";
import ReactDOM from "react-dom";
import { render } from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import SearchResults from "./Pages/SearchResults";
import HouseFilter from "./Components/HouseFilter";
import HouseQuery from "./Pages/HouseQuery";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch("/houses.json");
      const houses = await resp.json();
      setAllHouses(houses);
    };

    fetchHouses();
  }, []);

  const randomFeaturedHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <div>
          <Header Subtitle="Providing Houses Around Nairobi" />
          <HouseFilter allHouses={allHouses} />
          <Routes>
            <Route
              path="/"
              element={<FeaturedHouse house={randomFeaturedHouse} />}
            />
            <Route
              path="/SearchResults/:country"
              element={<SearchResults allHouses={allHouses} />}
            />
            <Route
              path="/house/:id"
              element={<HouseQuery allHouses={allHouses} />}
            />
          </Routes>
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}

// Use ReactDOM.render instead of ReactDOM.createRoot

createRoot(document.getElementById("root")).render(<App />);
