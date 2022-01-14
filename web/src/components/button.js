import React from "react"
import {LwdLink} from './page/link'

export const Button = ({to, className, children}) => {
    return (
        <LwdLink LinkTo={to} className={`text-white dark:text-white place-self-center w-48 p-3 my-3 text-center rounded-md shadow-md shadow-blue-600/50 font-medium  bg-blue-600 hover:bg-yellow-300 hover:shadow-yellow-300 hover:text-black dark:hover:bg-yellow-300 dark:hover:shadow-yellow-300 dark:hover:text-black transition focus:shadow-none ${className}`}>
            {children}
        </LwdLink>
    )
}

export const SkipNav = () => {
    return (
        <LwdLink paintDrip hex="#fcd34d" LinkTo="#main-content" className="absolute transform -translate-x-[150%] focus:translate-x-0 md:left-16 left-[4.5rem] w-[10rem] p-3 my-3 md:m-3 text-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-70 md:dark:focus:bg-yellow-300" aria-label="skip navigataion" aria-hidden="false" role='button'>Skip Navigation</LwdLink>
    )
}

export default Button