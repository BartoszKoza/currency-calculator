import { useState, useEffect } from "react";
import { Form } from "./Form";
import { fetchCurrencies } from "./currencies";
import "./App.css";
import { Clock } from "./Clock";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState();

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const data = await fetchCurrencies();
        console.log("Pobrane waluty:", data);
        setCurrencies (data);
      } catch (error) {
        console.error("Błąd ładowania walut:",error);
      }
    };
    loadCurrencies();
  },[]);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };
  return (
    <div className="App">
      <Clock/>
      {currencies.length > 0 ? (
        <Form key={currencies.lenght} result={result} calculateResult={calculateResult} currencies={currencies} />
      ):(
        <p>Ładowanie kursów walut</p>
      )}
    </div>
  );
}

export default App;
