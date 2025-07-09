export async function fetchCurrencies () {
  const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_b7RK9fH7PfDFPpZgE889UT27wkJlbKTScVBoj898&base_currency=PLN"

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const rates = data.data;

    const currencies = Object.keys(rates).map(code => ({
      short: code,
      name: code,
      rate: rates[code].value
    }));

    return currencies;
  }
  catch (error) {
    console.error("Błąd pobierania kursu walut:", error);
    return [];
  }

}