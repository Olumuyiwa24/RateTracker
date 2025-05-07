import { RiArrowUpDownLine } from "react-icons/ri";

interface LiveRateProps {
    onChange: () => void
}



function LiveRate({onChange}: LiveRateProps){
    return (
        <div className="bg-slate-800 p-[10px] border-0 mb-2 rounded-2xl text-center m-auto max-w-[50px]">
            <div className="flex justify-center items-center gap-2">
                <button onClick={onChange}><RiArrowUpDownLine size={30} className="rounded-md bg-slate-200"/></button> 
            </div>
        </div>
    )
}

export default LiveRate