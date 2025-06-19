import Button from '../atoms/Button'
import Header from '../atoms/HeroHeader'
import HeroImage from '../atoms/Image'

export default function HeroText() {
    return (
        <div className='dark:bg-black'>
            <Header />
            <HeroImage/>
            <Button />
        </div>
    )
}