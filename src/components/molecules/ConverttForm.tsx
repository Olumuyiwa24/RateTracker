import { useEffect, useState } from "react";
import ConvertFooter from "../atoms/ConvertFooter"
import { fetchCurrencyRates } from "../../store/currencySlice";
import { useDispatch, useSelector } from "react-redux";
import ConverterForm from "./ConverterForm";
import ConverterFormTo from "./ConverterFormTo";
import LiveRate from "../atoms/ConvertRate";
import type { AppDispatch } from "../../store/store";
import type { RootState } from "../../store/store";




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

    //state to hold amountError
    // const [amountError, setAmountError] = useState()

    //Hook to dispatch redux actions
    const dispatch= useDispatch<AppDispatch>()

    //Selecting rates and status from Redux store using the useSelector hook
    const {rates, status} = useSelector((state: RootState) => state.currency)
    // console.log('rates.redux', rates);

    // Fetch currency rates when component mounts or fromCurrency changes
    useEffect(() => {
        dispatch(fetchCurrencyRates(fromCurrency))
    }, [dispatch, fromCurrency])

    // set default base currency when rates are fetched
    useEffect(() => {
        if(rates&& Object.keys(rates).length > 0) {
            setFromCurrency(Object.keys(rates)[0])
    }},[rates])

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
  !amount || isNaN(Number(amount)) || !fromCurrency || !toCurrency || fromCurrency === toCurrency || status === 'failed';


 
  return (
    <div>
        {/* {status === 'loading' && <p>Fetching currency rates...</p>} */}
        {status === 'failed' && <p>Failed to load rates</p>}
        
        <ConverterForm amount = {amount} onChangeAmount = {handleAmount} onChange = {handleFromCurrencyChange} fromCurrency= {fromCurrency} options = {currencyOptions}/>
        <LiveRate onChange = {handleSwap}/>
        <ConverterFormTo options = {currencyOptions} onChange = {handleToCurrencyChange} toCurrency = {toCurrency} />

        {/* show conversion result in the UI if available */}
        {
            convertedAmount !== null && hasConverted && status !== 'failed' && (
                <div className="font-mono p-2 text-green-300 bg-black rounded-lg focus:ring mx-2 my-2">
                    {amount} {fromCurrency} = {convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
                </div>
            )
        }
        <ConvertFooter onConvert = {handleConvert} disabled = {convertButtonDisabled}/>

    </div>
  )
}

export default ConverttFormParent