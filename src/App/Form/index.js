import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="formHeader">Przelicznik walut</h1>

      <p>
        <label className="label">
          <span className="formLabelText">Kwota w PLN</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            className="formField"
            type="number"
            step="0.01"
            min="0"
            required
          />
        </label>
      </p>

      <p>
        <label className="label">
          <span className="formLabelText">Wybierz walutę</span>
          <select
            className="formField"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>

      <p>
        <button className="button">Oblicz</button>
      </p>

      <p className="formInfo">
        Kursy pochodzą ze strony nbp.pl z tabeli nr 136/A/NBP/2024 z dnia
        2024-07-15
      </p>
      <Result result={result} />
    </form>
  );
};
