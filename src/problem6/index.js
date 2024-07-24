const customAPIRequest = async (currencyInput, currencyOutput, inputValue) => {
  try {
    const apiUrl = "https://api.freecurrencyapi.com/v1/latest";
    const apiKey = "fca_live_TSSPCdeKZQJDpcrqAlPaHC5hKWZoVjlKh9VHyxhC";
    const baseCurrency = "USD";
    const filterCurrencies = [currencyInput, currencyOutput];

    const url = `${apiUrl}?apikey=${apiKey}&currencies=${filterCurrencies}&base_currency=${baseCurrency}`;

    const response = await fetch(url, {
      method: "GET",
    });

    const currencies = await response.json();

    console.log("--", currencies.data[currencyInput]);
    console.log("--", currencies.data[currencyOutput]);
  } catch (error) {
    console.log("error: ", error);
  }
};
customAPIRequest("USD", "AUD");
