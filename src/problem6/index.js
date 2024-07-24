const calculateCurrency = async (currencyInput, currencyOutput, inputValue) => {
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

    const result =
      (inputValue * currencies.data[currencyInput]) /
      currencies.data[currencyOutput];

    return result;
  } catch (error) {
    console.log("error: ", error);
  }
};

const customAPIRequest = async (currencyInput, currencyOutput, inputValue) => {
  const result = await calculateCurrency(
    currencyInput,
    currencyOutput,
    inputValue
  );

  console.log(result);
};

customAPIRequest("AUD", "USD", 1);
