import React, { useState, useEffect } from "react";
import "../components/ResultScreen.css";
import ListItem from "../components/ListItem";
import List from "../components/List";
import LoadingScreen from "../components/LoadingScreen";
import { fetchWines } from "../api/wines";
import styled from "@emotion/styled";
import SearchInput from "../components/SearchInput";

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

  const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  `;

  const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    background-image: var(--bg-gradient);
  `;

  return (
    <>
      <Container>
        <Header>
          <small>Hello,</small>
          <h2>What wine today?</h2>
          <SearchInput value={query} onChange={(value) => setQuery(value)} />
        </Header>
        <main>
          <List>
            {filteredWines.map((wine) => (
              <ListItem
                key={wine.lwin}
                href={`/wines/${wine.lwin_11}`}
                className="wineList"
              >
                {wine.wine}
              </ListItem>
            ))}
          </List>
        </main>
      </Container>
    </>
  );
}

// VORHER
//   return (
//     <>
//       <div className="app">
//         <header>
//           <small>Hello,</small>
//           <h2>What wine today?</h2>
//           <SearchInput value={query} onChange={(value) => setQuery(value)} />
//         </header>
//         <main>
//           <List>
//             {filteredWines.map((wine) => (
//               <ListItem
//                 key={wine.lwin}
//                 href={`/wines/${wine.lwin_11}`}
//                 className="wineList"
//               >
//                 {wine.wine}
//               </ListItem>
//             ))}
//           </List>
//         </main>
//       </div>
//     </>
//   );
// }

export default Wines;
