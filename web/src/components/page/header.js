import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Menu from "./static/menu.svg"
import Close from "./static/close.svg"

const NavButton = ({LinkTo, children}) => {
    return (
        <Link to={LinkTo} className="flex w-full md:w-28 p-3 my-3 md:m-3 justify-center rounded-md md:shadow-md font-medium text-gray-700 hover:text-black focus:text-black hover:bg-gray-100 focus:bg-yellow-300">{children}</Link>
    )
}

const LwdLogo = ({pageName}) => {
    return (
        <Link to="/" className="flex h-auto p-2 focus:ring-2 focus:ring-yellow-300 rounded-lg focus:text-black focus:bg-yellow-300">
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

    return (
        <header className="p-1 flex flex-wrap md:flex rounded-lg shadow-md">
            <LwdLogo pageName={pageName} />
            <div className="flex-grow"></div>
            <div className="flex items-center md:hidden p-2 ">
                <button onClick={() => setMenuOpen(!isMenuOpen)} className={`p-3 rounded-lg shadow-md`}>
                    {isMenuOpen ? <Close /> : <Menu />}
                </button>
            </div>
            <nav className={`transition w-full md:flex md:flex-row md:w-auto ${isMenuOpen ? "visible" : "invisible md:visible md:h-auto h-0"}`}>
                <NavButton LinkTo="/blog">blog</NavButton >
                <NavButton LinkTo="/showcase">showcase</NavButton>
                <NavButton LinkTo="/service">lwdService</NavButton>
                <NavButton LinkTo="/about">about me</NavButton >
            </nav>
        </header>
    )
}

export default Header;