import React, { useEffect, useState } from "react";
import "./App.css";
import fetchWine from "./api/wine";
import LoadingScreen from "./components/LoadingScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [allWines, setAllWines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getWines() {
    const newWines = await fetchWine();
    setAllWines(newWines);
    setIsLoading(false);
  }

  useEffect(() => {
    getWines();
  }, []);

  if (isLoading || allWines.length < 1) {
    return <LoadingScreen />;
  }

  return <ResultScreen allWines={allWines} />;
}
export default App;
