// import { useState, useEffect } from "react";
import InputField from "../atoms/InputField";
import SelectDropDown from "../atoms/SelectDropDown";

interface ConverterFormFromProps {
    options: { label: string, value: string }[];  // Array of objects with label and value (for dropdown options)
    fromCurrency: string;  // The currently selected currency
    amount: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;// The onChange handler for the dropdown
  }


    const ConverterForm : React.FC<ConverterFormFromProps> = ({fromCurrency, options,amount,onChange, onChangeAmount}) => {



    return (
        <div>
            <div className="    flex pt-2 pr-10 flex-col justify-center items-center bg-slate-100 rounded-xl mx-20 mb-2">
        {
            
                <SelectDropDown
                    label="From"
                    id="from"
                    options={options}
                    onChange={onChange}
                    value={fromCurrency}
                />

            
        }
            <InputField
             value={amount}
                label="Enter Amount"
                id="Amount"
                onChange={onChangeAmount}
        
            />
            </div>
        </div>
    )
}

export default ConverterForm