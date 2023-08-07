import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price(props) {
  const [coin, setCoin] = useState(null);
  // Our api key from coinapi.io
  // const apiKey = "88A2868C-5D35-4300-B32E-6983FCDF795E";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_COINAPI_KEY}`;

  const getCoin = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  //show the fetched data
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  //show a loading message
  const loading = () => <h1>loading...</h1>;
  return coin && coin.rate ? loaded() : loading();
}
