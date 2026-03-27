const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // Valor a converter
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

  console.log(currencySelect.value);

  const dolarToday = 5.2;
  const euroToday = 6.2;
  const libraToday = 7.7; 
  const bitcoinToday = 465.311;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US",{
      style: "currency",
      currency: "XBT"
    }).format(inputCurrencyValue / bitcoinToday)  
    
    
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  console.log(convertedValue);
}

function changeCurrency() {
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar") {
currencyName.innerHTML = "Dólar Americano"
currencyImage.src = "./assets/dollar.png"
}

if (currencySelect.value == "euro") {
currencyName.innerHTML = "Euro"
currencyImage.src = "./assets/Euro.png"
}

if (currencySelect.value == "libra") {
currencyName.innerHTML = "Libra esterlina"
currencyImage.src = "./assets/libra.png"
}

if (currencySelect.value == "bitcoin") {
  currencyName.innerHTML = "Bitcoin"
  currencyImage.src = "./assets/bitcoin.png"
}

convertValues()
}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues);
