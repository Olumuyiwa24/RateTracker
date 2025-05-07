import { IoMdArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";


export default function Conversio () {
    return (
        <div>
            
            
            <div className="flex gap-[4px] justify-start rounded-2xl items-center p-4 ">
                <Link to='/'>
                <p><IoMdArrowDropleftCircle size={20} className="bg-green-500 border rounded-2xl text-white"/></p>
                </Link>
                <p className="text-sm">Home</p>
                
            </div>
            
            
        <div className="pt-1 pb-2">
            
            <h2 className="text-xl text-emerald-600 font-serif">Converxio</h2>
        </div>
        </div>
    )
}