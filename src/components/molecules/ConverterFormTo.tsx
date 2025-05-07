

import SelectDropDown from "../atoms/SelectDropDown";

interface ConverterFormToProps {
    options: { label: string, value: string }[];  // Array of objects with label and value (for dropdown options)
    toCurrency: string;  // The currently selected currency
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  // The onChange handler for the dropdown
  }


 const ConverterFormTo: React.FC<ConverterFormToProps> =  ({options, toCurrency, onChange}) => {


    return (
        <div>
            <div className="flex justify-cent items-center bg-slate-100 rounded-xl mx-20 mb-5 ">
            
                <span className="sm:ml-24 mb-10 relative right-8 min-[660px]:left-0">
                
                    <SelectDropDown
                    label="To"
                    id="to"
                    
                    onChange={onChange}
                    value={toCurrency}
                    options = {options}
                    
                />
                </span>
               
            
        
            </div>
        </div>
    )
}

export default ConverterFormTo
