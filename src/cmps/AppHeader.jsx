import { Link } from "react-router-dom"

export function AppHeader() {

    return (
        <header className='header'>
            <Link to={'/'} className='header-title'>
                CODING APP
            </Link>
        </header>
    )
}