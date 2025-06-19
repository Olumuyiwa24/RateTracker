import axios from "axios";


//base url of the Exchange rate API. It will form part of the API endpoint
const API_URL = 'https://api.exchangerate-api.com/v4/latest';  

//an async function that fetches exchange rate for for a given base currency
export const fetchRates = async (baseCurrency : string) => {
    const response = await axios.get(`${API_URL}/${baseCurrency}`) //makes a get request to the api using the url + baseCurrency
    // console.log(response.data.rates);
   
    return response.data.rates; // return the rates part of the API response from the data that's already in JSON format, thanks to axios
    
}

export const formatCurrency = (value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return formatter.format(numValue).replace("NGN", "").trim();
}


