import React from "react"
import {LwdLink} from './page/link'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Button = ({to, className, children}) => {
    return (
        <LwdLink LinkTo={to} className={`text-white dark:text-white place-self-center w-48 p-3 my-3 text-center rounded-md shadow-md shadow-blue-600/50 hover:shadow-yellow-300 font-medium  bg-blue-600 hover:bg-yellow-300 hover:text-black transition focus:shadow-none ${className}`}>
            {children}
        </LwdLink>
    )
}

export const ColorDripButton = ({to, className, children}) => {
    return (
        <AniLink paintDrip hex="#fcd34d" to={to} className={`text-white dark:text-white place-self-center w-48 p-3 my-3 text-center rounded-md shadow-md shadow-blue-600/50 hover:shadow-yellow-300 font-medium bg-blue-600 hover:bg-yellow-300 hover:text-black transition focus:shadow-none ${className}`}>
            {children}
        </AniLink>
    )
}

export const SkipNav = () => {
    return (
        <LwdLink paintDrip hex="#fcd34d" LinkTo="#main-content" className="absolute transform -translate-y-[150%] focus:translate-y-0 left-52 w-full md:w-48 p-3 my-3 md:m-3 text-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-70 md:dark:bg-gray-700 md:dark:hover:bg-gray-600 md:dark:hover:text-white md:dark:focus:bg-yellow-300" aria-label="skip navigataion" aria-hidden="false" role='button'>Skip Navigation</LwdLink>
    )
}

export default Button