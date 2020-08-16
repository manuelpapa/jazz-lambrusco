import React, { useState } from "react";
import ListItem from "./ListItem";
import List from "./List";

export default function ResultScreen({ allWines }) {
  const [query, setQuery] = useState("");

  const filteredWines = allWines.filter((wine) => {
    const thisWine = wine.wine.toLowerCase().match(query.toLowerCase());
    return thisWine;
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
          {filteredWines.map((wine) => {
            return (
              <ListItem key={wine.lwin} href={wine.href} className="wineList">
                {wine.wine}
              </ListItem>
            );
          })}
        </List>
      </main>
      <footer>
        <a href="https://www.youtube.com/watch?v=AbSjwQAuhmE" target="blank">
          No wine? Get beer 🍻
        </a>
      </footer>
    </div>
  );
}
