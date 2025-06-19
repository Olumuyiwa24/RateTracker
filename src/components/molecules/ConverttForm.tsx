import { useEffect, useState } from "react";
import ConvertFooter from "../atoms/ConvertFooter"

import ConverterForm from "./ConverterForm";
import ConverterFormTo from "./ConverterFormTo";
import LiveRate from "../atoms/ConvertRate";

import { formatCurrency } from "../../utils/exchange" //// Importing the toMoney function to format the converted amount
import { useGetRatesQuery } from "../../store/currencyAPI";




function ConverttFormParent() {
 

    // State to hold the amount entered by the user
    const[amount, setAmount]= useState('');

    // State for the base currency (the one converting from)
    const[fromCurrency, setFromCurrency] = useState("USD");

    // State for the target currency (the one converting to)
    const [toCurrency, setToCurrency] = useState("NGN")

    // State to hold the result of the conversion
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null)

    const [hasConverted, setHasConverted ] = useState(false)

    const [isOnline, setIsOnline] = useState(navigator.onLine);
   
    const { isLoading, error, data: rates } = useGetRatesQuery(fromCurrency);


    // dropdown options for the select components
   const currencyOptions = Object.keys(rates || {}).map((currency) => ({
    label: currency,
    value: currency
   }))

//    handler to do the conversion when user clicks "Convert"
   const handleConvert = () => {
    if(rates && toCurrency && amount) {
        const rate = rates[toCurrency]
        const result = parseFloat(amount)  * rate
        setConvertedAmount(result)
        setHasConverted(true)

        
    }
    
   }

    // hook to do conversion live after the intial conversion triggered by the convert button
   useEffect(() => {

        if(!amount) {
            setConvertedAmount(null)
        }
        if(hasConverted && rates && toCurrency && amount && !isNaN(Number(amount))) {
            const rate = rates[toCurrency]
            const result = parseFloat(amount) * rate
            setConvertedAmount(result)
        }
   }, [amount,rates, toCurrency, hasConverted])

   // Swap handler
    const handleSwap = () => {
        const swapCurrency = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(swapCurrency);
    
  };

  
   //handler for the amount field
   const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value)
        
   }

   //Handle "from currency" selection
   const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFromCurrency(e.target.value)
       
   }

   //Handle "to currency" input
   const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setToCurrency(e.target.value)
        
   }

   //disable convert button/component
   const convertButtonDisabled =
  !amount || isNaN(Number(amount)) || !fromCurrency || !toCurrency || fromCurrency === toCurrency || !!error;


  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
 
  return (
    <div>
        {isLoading && <p>Fetching currency rates...</p>}
        {error && <p>Failed to load rates</p>}
        {!isOnline && <p>You are offline. Some features may not work.</p>}
        
        <ConverterForm amount = {amount} onChangeAmount = {handleAmount} disabled={!!error} onChange = {handleFromCurrencyChange} fromCurrency= {fromCurrency} options = {currencyOptions}/>
        <LiveRate onChange = {handleSwap}/>
        <ConverterFormTo options = {currencyOptions} disabled={!!error} onChange = {handleToCurrencyChange} toCurrency = {toCurrency} />

        {/* show conversion result in the UI if available */}
        {
            convertedAmount !== null && hasConverted && !error && (
                <div className="font-mono p-2 text-green-300 bg-black rounded-lg focus:ring mx-2 my-2">
                    {amount} {fromCurrency} = {formatCurrency(convertedAmount)} {toCurrency}
                </div>
            )
        }
        <ConvertFooter onConvert = {handleConvert} disabled = {convertButtonDisabled}/>

    </div>
  )
}

export default ConverttFormParent
