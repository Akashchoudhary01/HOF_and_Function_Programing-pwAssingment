// Function to convert USD to INR
function convertToINR(priceInUSD, exchangeRate) {
  return priceInUSD * exchangeRate;
}

// Array of prices in USD
const pricesInUSD = [10, 20, 30, 40, 50];

// Exchange rate (1 USD to 80 INR)
const exchangeRate = 80;

// Using map to convert prices to INR
const pricesInINR = pricesInUSD.map((price) => convertToINR(price, exchangeRate));

// Output the converted prices in INR
console.log("Prices in INR:", pricesInINR);
