import { Link } from "react-router-dom";

export default function Currencies(props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  //we are grabbing each coin and return a new link component
  //destructure name and symbol for each coin
  //inside the Link we are going to display the name of the coin
  return (
    <div className="">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`}>
            <h2 className="flex flex-row flex-wrap justify-center bg-stone-500">
              {name}
            </h2>
          </Link>
        );
      })}
    </div>
  );
}
