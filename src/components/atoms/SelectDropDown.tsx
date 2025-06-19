type OptionType = {
    label: string
    value: string
}

type SelectDropDownProps = {
    label: string
    id: string
    options: OptionType[]
    value: string
    onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void
    disabled?: boolean
    
    
}


export default function SelectDropDown ({label, id,options = [], value, onChange, disabled}: SelectDropDownProps) {
    // console.log('options:', options)
    return (
        <div className="grid min-w-[40%] sm:min-w-[40%]  md:min-w-[10%] grid-cols rounded-md relative  gap-4 bg-gray-500 mt-6 text-center">
            <div className="py-[12px] px-6">
                <label htmlFor={id} className="text-white text-sm">
                    {label}
                </label>

                {/* select button */}
                <select 
                    id={id}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className=" rounded-md relative z-50 text-white font-bold mx-4 px-6 py-2 outline-0 text-sm bg-gray-500 focus:ring-2 transition duration-200 shadow-sm hover:shadow-md focus:ring-slate-500 focus:border-emerald-500 " 
                >
                    {
                        options.length === 0 ? (
                            <option value="" disabled>
                                Loading...
                            </option>
                        ) :
                    
                    
                        (options?.map((opt) => (
                            
                        <option value={opt.value} key={opt.value} className="bg-gray-500">
                                {opt.label}
                            </option>
                        ))
                      
                    )
                    }
                </select>
            </div>
        </div>
    )
}