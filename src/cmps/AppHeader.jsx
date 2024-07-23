import { Link, useMatch } from "react-router-dom"

export function AppHeader() {
    const isCodePage = useMatch('/codeblock/:codeblockId')

    return (
        <header className='header'>
            {isCodePage && (
                <Link to={'/'} className='header-title'>
                    CodingApp
                </Link>
            )}
        </header>
    )
}