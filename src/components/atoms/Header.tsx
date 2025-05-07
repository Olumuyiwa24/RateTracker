import { SiWebmoney } from "react-icons/si";

export default function Header() {
    return (
        <div className="flex flex-col justify-center items-center m-auto">
      <div className="flex justify-center items-center">
        <SiWebmoney size={20} className="text-amber-500"/>
        <h2 className='text-4xl text-blue-700'>Xchange-<span className="text-amber-500">Lite</span></h2>
      </div>
      <span className="mt-4">
        <p className="text-sm md:text-base font-serif text-black">Convert currencies.</p>
        <p>Track rates. Make smarter decisions</p>
      </span>
    </div>
    )
}