type InputFieldProps = {
    label: string
    value: string
    id: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

export default function InputField({label, id, value, onChange, placeholder} : InputFieldProps) {
    return (
        <div className="p-8 lg:pl-20 pl-18 md:flex flex flex-col justify-center text-center relative top-[-50px]">
            <label htmlFor={id} className="block text-sm font-medium text-gray-800 mt-10">
                {label}
            </label>
            <input 
                type="number"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                id={id} 
                className="w-[180px] text-sm rounded-md px-2 py-3 mt-1 outline-0 border border-gray-400"
            />
        </div>
    )
}