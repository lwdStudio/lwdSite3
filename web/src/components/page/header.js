import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {GlobeAltIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/solid'


const NavButton = ({LinkTo, children}) => {
    return (
        <Link to={LinkTo} className="flex w-full md:w-28 p-3 my-3 md:m-3 justify-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-50 md:dark:bg-gray-700 md:dark:hover:bg-gray-600 md:dark:hover:text-white md:dark:focus:bg-yellow-300">{children}</Link>
    )
}

const LanguageSwitcher = () => {
    return (
        <GlobeAltIcon className="flex h-12 w-full md:w-auto p-3 my-3 md:m-3 justify-center rounded-full text-gray-700 text-center align-center"/>
    )
}

const DarkModeSwitch = (onClick) => {
    return (
        <div>
            <button onClick={onClick} className="link-common rounded-full">
                <MoonIcon className="flex h-12 w-full md:w-auto p-3 my-3 md:m-3 justify-center rounded-full text-gray-700 dark:text-gray-400 text-center align-center"/>
            </button>
        </div>
    )
}

const LwdLogo = ({pageName}) => {
    return (
        <Link to="/" className="flex h-auto p-2 focus:ring-2 focus:ring-yellow-300 rounded-lg focus:text-black focus:bg-yellow-300 text-gray-800 dark:text-white dark:text-opacity-50 dark:hover:text-white">
            <StaticImage
                src="../../images/lwd-stamp.png"
                alt="Liwen Duan's Logo"
                layout="fixed"
                width={50}
                height={50} />
            <span className="inline-flex p-3 text-2xl font-serif">{pageName}</span>
        </Link>
    )
}

const Header = ({pageName='lwdSite'}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const MenuIconStyle = "h-8 w-auto"
    return (
        <header className="p-1 flex flex-wrap md:flex rounded-b-lg shadow-md bg-white dark:bg-gray-800 dark:text-white dark:text-opacity-50">
            <LwdLogo pageName={pageName} />
            <div className="flex-grow"></div>
            <div className="flex items-center md:hidden p-2 ">
                <button onClick={() => setMenuOpen(!isMenuOpen)} className={`p-3 rounded-lg shadow-md dark:bg-gray-700`}>
                    {isMenuOpen ? <XIcon className={MenuIconStyle} /> : <MenuIcon className={MenuIconStyle} />}
                </button>
            </div>
            <nav className={`transition w-full md:flex md:flex-row md:w-auto ${isMenuOpen ? "visible" : "invisible md:visible md:h-auto h-0"}`}>
                <NavButton LinkTo="/blog">blog</NavButton >
                <NavButton LinkTo="/showcase">showcase</NavButton>
                <NavButton LinkTo="/service">lwdService</NavButton>
                <NavButton LinkTo="/about">about me</NavButton>
                {/* <LanguageSwitcher /> */}
            </nav>
        </header>
    )
}

export default Header;