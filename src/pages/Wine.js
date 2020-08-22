import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { fetchWine } from "../api/wines";

export default function Wine() {
  const { lwin } = useParams();
  const [wine, setWine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedWine = await fetchWine(lwin);
        setWine(fetchedWine);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [lwin]);

  if (error) {
    return <div>Error!</div>;
  }
  if (loading || !wine) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <header className="wineClass">
        <button onClick={() => history.goBack()}>go back</button>
        <h2>{wine.name}</h2>
      </header>
      <div className="wineSingle">
        <ul>
          <li>Color: {wine.color}</li>
          <li>Year: {wine.vintage}</li>
          <li>Country: {wine.country}</li>
          <li>Score: {wine.score}</li>
        </ul>
      </div>
    </div>
  );

  //TODO: Daten von API darstellen
  // {fetchWine} anpassen
  // useHistory einbinden

  //   function HomeButton() {
  //     let history = useHistory();

  //     function handleClick() {
  //       history.push("/wines");
  //     }

  //     return (
  //       <button type="button" onClick={handleClick}>
  //         Go home
  //       </button>
  //     );
  //   }
}
