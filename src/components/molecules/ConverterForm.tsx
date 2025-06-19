// import { useState, useEffect } from "react";
import InputField from "../atoms/InputField";
import SelectDropDown from "../atoms/SelectDropDown";

interface ConverterFormFromProps {
    options: { label: string, value: string }[];  // Array of objects with label and value (for dropdown options)
    fromCurrency: string;  // The currently selected currency
    amount: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;// The onChange handler for the dropdown
    disabled?: boolean; // Optional prop to disable the dropdown
    
  }

    const ConverterForm : React.FC<ConverterFormFromProps> = ({fromCurrency, options,amount,onChange, onChangeAmount, disabled}) => {

    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-slate-100 rounded-xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 md:p-8">
        {
                <SelectDropDown
                    label="From"
                    id="from"
                    options={options}
                    onChange={onChange}
                    value={fromCurrency}
                    disabled={disabled}
                />

            
        }
            <InputField
             value={amount}
                label="Enter Amount"
                id="Amount"
                onChange={onChangeAmount}
                disabled = {disabled}
            />
            </div>
        </div>
    )
}

export default ConverterForm