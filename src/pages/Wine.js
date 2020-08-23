import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { fetchWine } from "../api/wines";
import styled from "@emotion/styled";

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

  const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    background-image: var(--bg-gradient);
  `;

  const Main = styled.div`
    padding: 20px;
  `;

  const Button = styled.div`
    font-size: 0.9em;
    color: #ffffff;
    padding: 5px 15px 8px;
    text-transform: uppercase;
    margin-bottom: 10px;
    border: 1px solid #ffffff;
    border-radius: 50px;
    align-self: end;
    background-image: var(--red-gradient);
    cursor: pointer;
  `;
  const Footer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
  `;

  return (
    <>
      <Header>
        <small>Good choice!</small>
        <h2>{wine.name}</h2>
      </Header>
      <Main>
        <table>
          <tbody>
            <tr>
              <td>Color:</td>
              <td>
                <b>{wine.color}</b>
              </td>
            </tr>
            <tr>
              <td>Year:</td>
              <td>
                <b>{wine.year}</b>
              </td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>
                <b>{wine.country}</b>
              </td>
            </tr>
            <tr>
              <td>Score:</td>
              <td>
                <b>{wine.score}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </Main>
      <Footer>
        <Button onClick={() => history.goBack()}>back</Button>
      </Footer>
    </>

    // <div>
    //   <header className="wineClass">
    //     <h2>{wine.name}</h2>
    //   </header>
    //   <div className="wineSingle">
    //     <div>
    //       <div>Color: {wine.color}</div>
    //       <div>Year: {wine.year}</div>
    //       <div>Country: {wine.country}</div>
    //       <div>Score: {wine.score}</div>
    //     </div>
    //   </div>
    //   <footer>
    //     <button onClick={() => history.goBack()}>go back</button>
    //   </footer>
    // </div>
  );
}
