import React, { useState, useEffect } from "react";
import List from "../components/List";
import LoadingScreen from "../components/LoadingScreen";
import { fetchWines } from "../api/wines";
import SearchInput from "../components/SearchInput";
import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  background-image: var(--bg-gradient);
`;

const Main = styled.div`
  padding: 10px;
`;

const ListItem = styled.a`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #eeeeee;
  text-decoration: none;
  color: #36323f;
  align-items: center;
  font-size: 0.9em;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  background-image: var(--red-gradient);
`;

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
      <Header>
        <small>Hello,</small>
        <h2>What wine today?</h2>
        <SearchInput value={query} onChange={(value) => setQuery(value)} />
      </Header>
      <Main>
        <List>
          {filteredWines.map((wine) => (
            <ListItem key={wine.lwin} href={`/wines/${wine.lwin_11}`}>
              {wine.wine}
            </ListItem>
          ))}
        </List>
      </Main>
      <Footer>
        <a href="https://www.youtube.com/watch?v=AbSjwQAuhmE" target="blank">
          No wine? Get beer{" "}
          <span role="img" aria-label="two beers in glass">
            🍻
          </span>
        </a>
      </Footer>
    </>
  );
}

export default Wines;
