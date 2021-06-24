import "./styles.css";
import data from "./data";
import { useEffect, useState } from "react";
const url =
  "https://api.exchangeratesapi.io/v1/latest?access_key=8a46c3eac8bd7cbdaa9b700b59255c5c&format=1";

export default function App() {
  const [item, setItem] = useState(data);
  const [curreny, setCurrency] = useState("");
  const rates = ["INR", "USD"];

  const fetchCurrency = async () => {
    const rate = await fetch(url);
    const rateJson = await rate.json();
    console.log(rateJson);
  };
  useEffect(() => {
    fetchCurrency();
  }, []);

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="App">
      <section>
        <nav className="nav-section">
          <img
            src="https://www.donatekart.com/images/dkLogo.png"
            alt="logo"
            className="logo"
          />
          <form className="form">
            <label className="label">
              <b>CURRENCY</b>
            </label>
            <select
              name="sort"
              className="sort-input"
              value={curreny}
              onChange={handleCurrency}
            >
              {rates.map((price, index) => {
                return <option value={price}>{price}</option>;
              })}
            </select>
          </form>
        </nav>
      </section>
      <section className="section-container">
        {item.map((user, index) => {
          const { name, images, price } = user;
          return (
            <div className="container" key={index}>
              <img src={images} alt="logo" className="image" />
              <div className="center">
                <p className="title">{name}</p>
                <p className="price">{price}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
