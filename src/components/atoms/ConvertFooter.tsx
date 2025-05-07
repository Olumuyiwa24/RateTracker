import { SiConvertio } from "react-icons/si";
import { FaRegChartBar } from "react-icons/fa";

export default function Footer({onConvert, disabled}) {
    
    return(
        <div className="p-6 b-0 bg-emerald-700 border rounded-b-lg flex justify-between items-center">
            <span onClick={onConvert} className="flex flex-col justify-center items-center">
                <SiConvertio size={30} className="text-white"/>
                <button className="text-white cursor" disabled = {disabled}>Convert</button>
                <p ></p>
            </span>
            <span className="flex flex-col justify-center items-center">
                <FaRegChartBar size={30} className="text-white"/>
                <p className="text-white">Chart</p>
            </span>
        </div>
    )
}