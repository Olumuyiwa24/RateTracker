import HeroText from "../components/molecules/HeroText"
import { RootState } from "../store/store"
import { useSelector } from "react-redux"

export function HomePage() {

    const mode = useSelector((state: RootState) => state.theme.mode)
    return (
        <div className={`${mode === 'dark' ? 'dark' : ''} max-w-xl m-auto py-8 border rounded-lg border-blue-300`}>
            <HeroText />
        </div>
    )
}