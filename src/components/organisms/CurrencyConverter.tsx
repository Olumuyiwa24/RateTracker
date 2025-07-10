import { useEffect, useState } from "react";
import ConvertFooter from "../atoms/Footer"
import LiveRate from "../atoms/SwapRate";
import { formatCurrency } from "../../utils/exchange" //// Importing the toMoney function to format the converted amount
import { useGetRatesQuery } from "../../features/currencyAPI";
import FromCurrencySelector from "../molecules/FromCurrencySelector";
import ToCurrencySelector from "../molecules/ToCurrencySelector";




function CurrencyConverter() {
 

    // State to hold the amount entered by the user
    const[amount, setAmount]= useState(() => {
        const storedAmount = localStorage.getItem('amount');
        return storedAmount !== null ? storedAmount : "";
    
    });

    // State for the base currency (the one converting from)
    const[fromCurrency, setFromCurrency] = useState("USD");

    // State for the target currency (the one converting to)
    const [toCurrency, setToCurrency] = useState("NGN")

    const initialResult = (() => {
        const stored = localStorage.getItem('result');
        return stored !== null ? JSON.parse(stored) : null;
      })();
    // State to hold the result of the conversion
    const [convertedAmount, setConvertedAmount] = useState<number | null>(initialResult);

    const [hasConverted, setHasConverted ] = useState(Boolean(initialResult))

    const [isOnline, setIsOnline] = useState(navigator.onLine);
   
    const { isLoading, error, data: rates } = useGetRatesQuery(fromCurrency);

    type LastConversion = {
      amount: string;
      fromCurrency: string;
      toCurrency: string;
      convertedAmount: number;
    } | null;

    const [lastConversion, setLastConversion] = useState<LastConversion>(null);


    // dropdown options for the select components
    //explain this block of code below
    // it maps through the keys of the rates object (which contains currency codes) and creates
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

//    useEffect(() => {
//     if (rates && Object.keys(rates).length > 0) {
//       setFromCurrency((prev) =>
//         prev && Object.keys(rates).includes(prev)
//           ? prev
//           : Object.keys(rates)[0]
//       );
//     }
//   }, [rates]);

   useEffect(() => {
    if (amount && convertedAmount) {
      // Save to lastConversion
      setLastConversion({
        amount,
        fromCurrency,
        toCurrency,
        convertedAmount,
      });
    }
  }, [amount, convertedAmount, fromCurrency, toCurrency]);

    // hook to do conversion live after the intial conversion triggered by the convert button
   useEffect(() => {

        // if(!amount) {
        //     setConvertedAmount(null)
        // }
        if(hasConverted && rates && toCurrency && amount && !isNaN(Number(amount))) {
            const rate = rates[toCurrency]
            const result = parseFloat(amount) * rate
            setConvertedAmount(result)
            localStorage.setItem('result', JSON.stringify(result)); // Store the result in localStorage
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
        localStorage.setItem('amount', e.target.value); // Store the amount in localStorage
        if (e.target.value === "") {
            setConvertedAmount(null); // Reset converted amount if input is cleared
            setHasConverted(false); // Reset conversion state
        }
        
   }

   //Handle "from currency" selection

interface FromCurrencyChangeOption {
    value: string;
    label: string;
}

interface ToCurrencyChangeOption {
    value: string;
    label: string;
}

const handleFromCurrencyChange = (option: FromCurrencyChangeOption | null) => {
    setFromCurrency(option ? option.value : "USD");
}

   //Handle "to currency" input
   const handleToCurrencyChange = (option: ToCurrencyChangeOption | null) => {
        setToCurrency(option ? option.value : "NGN");
        
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
        
        <FromCurrencySelector amount = {amount} onChangeAmount = {handleAmount} disabled={!!error} onChange = {handleFromCurrencyChange} fromCurrency= {fromCurrency} options = {currencyOptions}/>
        <LiveRate onChange = {handleSwap}/>
        <ToCurrencySelector options = {currencyOptions} disabled={!!error} onChange = {handleToCurrencyChange} toCurrency = {toCurrency} />

        
        {convertedAmount !== null && (
            <div className="font-mono p-2 text-green-300 bg-black rounded-lg focus:ring mx-2 my-2">
                {amount
                ? `${amount} ${fromCurrency} = ${formatCurrency(convertedAmount)} ${toCurrency}`
                : lastConversion
                    ? `Last conversion: ${lastConversion.amount} ${lastConversion.fromCurrency} = ${formatCurrency(lastConversion.convertedAmount)} ${lastConversion.toCurrency}` 
                    : "no conversion yet"
                }
            </div>
        )}
       
        
        {!hasConverted && !error && (
            <div className="text-gray-500 text-sm mx-2 my-2">
                Enter an amount and select currencies to convert.
            </div>
        )}

        {/* Footer with the convert button */}
        <ConvertFooter onConvert = {handleConvert} disabled = {convertButtonDisabled}/>

    </div>
  )
}

export default CurrencyConverter
