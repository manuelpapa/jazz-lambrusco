export async function fetchWines() {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Token ebf0554796ea7868cb3b67e69986d90e25667416",
      },
    }
  );
  const result = await response.json();
  const uniqueWines = result.results.filter(
    (wine, index) =>
      result.results.findIndex((other) => other.lwin === wine.lwin) === index
  );
  return uniqueWines;
}

export async function fetchWine(lwin) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/?lwin_11=${lwin}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Token ebf0554796ea7868cb3b67e69986d90e25667416",
      },
    }
  );
  const result = await response.json();
  console.log(result);
  const wine = {
    name: result.wine,
    color: result.color,
    year: result.vintage,
    country: result.country,
    score: result.score,
  };
  // console.log(wine);
  return wine;
}
