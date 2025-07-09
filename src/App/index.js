import { useState, useEffect } from "react";
import { Form } from "./Form";
import { fetchCurrencies } from "./currencies";
import "./App.css";
import { Clock } from "./Clock";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState();
  const [delay, setDelay] = useState (false);

  useEffect(() => {
    const timer = setTimeout(() => setDelay(true),1000);
    return () => clearTimeout(timer);
  },[]);

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
      {!delay ? (
        <p className="delay">Chwileczkę, ładujemy zawartość...</p>
      ) : currencies.length > 0 ? (
        <Form key={currencies.length} result={result} calculateResult={calculateResult} currencies={currencies} />
      ):(
        <p>Ładowanie kursów walut</p>
      )}
    </div>
  );
}

export default App;
