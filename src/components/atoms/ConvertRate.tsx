import { RiArrowUpDownLine } from "react-icons/ri";

interface LiveRateProps {
    onChange: () => void
}



function LiveRate({onChange}: LiveRateProps){
    return (
        <div className="bg-black p-[10px] border mb-10 rounded-2xl text-center m-auto max-w-[180px]">
            <div className="flex justify-center items-center gap-2">
                <button onClick={onChange}><RiArrowUpDownLine size={25} className="rounded-md bg-lime-200"/></button>
                <span>
                    <p className="text-white font-serif text-[12px]">1USD = NGN1600</p>
                </span>
            </div>
        </div>
    )
}

export default LiveRate