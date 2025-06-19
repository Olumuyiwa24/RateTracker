

import SelectDropDown from "../atoms/SelectDropDown";

interface ConverterFormToProps {
    options: { label: string, value: string }[];  // Array of objects with label and value (for dropdown options)
    toCurrency: string;  // The currently selected currency
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  // The onChange handler for the dropdown
    disabled?: boolean; // Optional prop to disable the dropdown    
  }


 const ConverterFormTo: React.FC<ConverterFormToProps> =  ({options, toCurrency, onChange, disabled}) => {


    return (
        <div>
            <div className="flex justify-center items-center bg-slate-100 rounded-xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-4 sm:p-6 md:p-8">
                <SelectDropDown
                    label="To"
                    id="to"
                    onChange={onChange}
                    value={toCurrency}
                    options={options}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

export default ConverterFormTo
