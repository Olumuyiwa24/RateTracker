import { SiConvertio } from "react-icons/si";


interface FooterProps {
    onConvert : () => void
    disabled: boolean
}

export default function Footer({onConvert, disabled}: FooterProps) {
    
    return(
        <div className="p-[8px] b-0 bg-emerald-700 border-0 rounded-b-lg flex justify-center item-center">
            <span onClick={onConvert} className="flex flex-col justify-center hover:p-[6px] hover:text-sm items-center hover:rounded-b-lg hover:transition-all hover:scale-100 hover:bg-emerald-800">
                <SiConvertio size={30} className="text-white"/>
                <button className="text-white  cursor" disabled = {disabled}>Convert</button>
                <p ></p>
            </span>
            
        </div>
    )
}