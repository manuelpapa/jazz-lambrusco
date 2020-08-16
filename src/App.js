import React, { useEffect, useState } from "react";
import "./App.css";
import fetchWine from "./api/wine";
import List from "./components/List";
import ListItem from "./components/ListItem";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [allWines, setAllWines] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function getWines() {
    const newWines = await fetchWine();
    setAllWines(newWines);
    setIsLoading(false);
  }

  useEffect(() => {
    getWines();
  }, []);

  if (isLoading || allWines === null) {
    return <LoadingScreen />;
  }
  const filteredWines = allWines.filter((wine) => {
    return wine.wine.toLowerCase().match(query.toLowerCase());
  });

  return (
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
          {filteredWines?.map((wine) => {
            return (
              <ListItem key={wine.lwin} href={wine.href} className="wineList">
                {wine.wine}
              </ListItem>
            );
          })}
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
