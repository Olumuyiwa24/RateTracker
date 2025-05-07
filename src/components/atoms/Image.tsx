export default function HeroImage() {

    const imageUrl = "https://thumbs.dreamstime.com/b/profit-currency-exchange-services-cartoon-man-sits-screen-large-smartphone-mobile-application-profitable-149053034.jpg"
    return (
        <div className="flex flex-col justify-center items-center">
            <img 
                className="w-full mt-5 max-w-sm md:max-w-md lg:max-w-lg" 
                src={imageUrl} 
                alt="image_forExchange" 
            />
            <p className=" font-serif text-sm md:text-base">
                Convert your currency into more than 130+ countries currency
            </p>
        </div>
    )
}