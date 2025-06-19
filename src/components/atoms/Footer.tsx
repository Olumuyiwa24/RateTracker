import { SiConvertio } from "react-icons/si";


interface FooterProps {
    onConvert : () => void
    disabled: boolean
}

export default function Footer({onConvert, disabled}: FooterProps) {
    
    return(
        <div className="p-[8px] mt-5 b-0 bg-emerald-700 border-0 rounded-b-lg flex justify-center item-center">
            <span onClick={onConvert} className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                <SiConvertio size={30} className="text-white"/>
                <button className="text-white  cursor" disabled = {disabled}>Convert</button>
                <p ></p>
            </span>
            
        </div>
    )
}