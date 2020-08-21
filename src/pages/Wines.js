import React, { useState, useEffect } from "react";
import "../components/ResultScreen.css";
import ListItem from "../components/ListItem";
import List from "../components/List";
import LoadingScreen from "../components/LoadingScreen";
import fetchWines from "../api/wines";

function Wines() {
  const [wines, setWines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const allWines = await fetchWines();
      setWines(allWines);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading || wines === null) {
    return <LoadingScreen />;
  }

  const filteredWines = wines.filter((wine) => {
    return wine.wine.toLowerCase().match(query.toLowerCase());
  });

  return (
    <>
      <div className="app">
        <header>
          <small>Hello,</small>
          <h2>What wine today?</h2>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="header__input"
            placeholder="🔎 Search for your favorite wine"
          />
        </header>
        <main>
          <List>
            {filteredWines.map((wine) => (
              <ListItem key={wine.lwin} href={wine.href} className="wineList">
                {wine.wine}
              </ListItem>
            ))}
          </List>
        </main>
      </div>
    </>
  );
}

export default Wines;
