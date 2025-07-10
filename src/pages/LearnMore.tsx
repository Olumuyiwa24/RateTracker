import LearnMorePage from "../components/molecules/LearnMorePage"

import Marquee from "react-fast-marquee";


export default function LearnMore() {
    return (
        <div className='max-w-xl m-auto h-fit py-1 border-0 rounded-lg bg-white'>
            <LearnMorePage/>
            <AnnouncementTicker />
        </div>
    )
}





const AnnouncementTicker = () => {
  return (
    <div className="bg-gray-100 py-2">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={false}
        className="text-sm p-4 hover:cursor-pointer font-medium text-gray-800 bg-amber-500"
      >
        <span className="mx-4">Click here for 40+ new updates</span>
        <span className="mx-4">Best partners by your side</span>
        <span className="mx-4">Sell everywhere from one dashboard</span>
        <span className="mx-4">Free plan available – no credit card needed</span>
      </Marquee>
    </div>
  );
};


