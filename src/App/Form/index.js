import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

import {
  Button,
  Content,
  CurrencyConventer,
  FormHeader,
  FormInfo,
  Input,
  Label,
  Select,
} from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <CurrencyConventer onSubmit={onSubmit}>
      <FormHeader>Przelicznik walut</FormHeader>

      <p>
        <Label>
          <Content>Kwota w PLN</Content>
          <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            type="number"
            step="0.01"
            min="0"
            required
          />
        </Label>
      </p>

      <p>
        <Label>
          <Content>Wybierz walutę</Content>
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </Select>
        </Label>
      </p>

      <p>
        <Button>Oblicz</Button>
      </p>

      <FormInfo>
        Kursy pochodzą ze strony nbp.pl z tabeli nr 136/A/NBP/2024 z dnia
        2024-07-15
      </FormInfo>
      <Result result={result} />
    </CurrencyConventer>
  );
};
