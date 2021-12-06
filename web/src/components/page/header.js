import React, {useState} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const NavButton = ({LinkTo, children}) => {
    return (
        <AniLink paintDrip hex="#fcd34d" to={LinkTo} className="flex w-full md:w-28 p-3 my-3 md:m-3 justify-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-70 md:dark:bg-gray-700 md:dark:hover:bg-gray-600 md:dark:hover:text-white md:dark:focus:bg-yellow-300">{children}</AniLink>
    )
}

const LwdLogo = ({pageName}) => {
    return (
        <AniLink cover direction="right" bg="#fcd34d" to="/" className="flex h-auto p-2 focus:ring-2 focus:ring-yellow-300 rounded-lg focus:text-black focus:bg-yellow-300 text-gray-800 dark:text-white dark:text-opacity-70 dark:hover:text-white" title="Back to Home Page">
            <StaticImage
                src="../../images/lwd-stamp.png"
                alt="Liwen Duan's Logo"
                layout="fixed"
                width={50}
                height={50} />
            <span className="inline-flex p-3 text-2xl font-serif">{pageName}</span>
        </AniLink>
    )
}

export const Header = ({pageName='lwdSite'}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const MenuIconStyle = "scale-150"
    return (
        <header className="p-1 flex flex-wrap md:flex rounded-b-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white dark:text-opacity-50">
            <LwdLogo pageName={pageName} />
            <div className="flex-grow"></div>
            <div className="flex items-center md:hidden p-2 ">
                <button onClick={() => setMenuOpen(!isMenuOpen)} className={`h-12 w-12 rounded-lg shadow-md dark:bg-gray-700`} aria-label="Menu">
                    {isMenuOpen ? <FontAwesomeIcon icon={faTimes} className={MenuIconStyle} /> : <FontAwesomeIcon icon={faBars} className={MenuIconStyle}/>}
                </button>
            </div>
            <nav className={`transition w-full md:flex md:flex-row md:w-auto ${isMenuOpen ? "visible" : "invisible md:visible md:h-auto h-0"}`}>
                <NavButton LinkTo="/blog">blog</NavButton >
                <NavButton LinkTo="/showcase">showcase</NavButton>
                <NavButton LinkTo="/lwd-service">lwdService</NavButton>
                <NavButton LinkTo="/about">about me</NavButton>

                {/* <LanguageSwitcher /> */}
            </nav>
        </header>
    )
}