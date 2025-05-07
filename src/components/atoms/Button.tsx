import { Link } from "react-router-dom"

const Button = () => {
    return (
      <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-3">
        <Link to='/convert'>
            <button className="text-white font-serif text-sm bg-blue-500 md:text-base md:px-8 md:py-2 px-4 py-2 rounded-md cursor hover:bg-blue-100 hover:text-black hover:border hover:border-gray-700 hover: scale-105 transition-all duration-300">Try it now</button>
        </Link>
        <Link to='/learn'>
            <button className="text-white font-serif text-sm border border-amber-500 bg-amber-500  md:text-base md:px-8 md:py-2 px-4 py-2 rounded-md cursor hover:bg-blue-200 hover:text-black hover:border hover:border-blue-200 hover:scale-105 transition-all duration-300 ">Learn More</button>
        </Link>
        
      </div>
    )
  }

export default Button