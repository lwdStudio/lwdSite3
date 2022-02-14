import React from "react"
import {LwdLink} from './page/link'

export const Button = ({to, className, children}) => {
    return (
        <LwdLink LinkTo={to} className={`text-white dark:text-white place-self-center w-48 p-3 my-3 text-center rounded-md shadow-md shadow-blue-600/50 font-medium  bg-blue-600 hover:bg-yellow-300 hover:shadow-yellow-300 hover:text-black dark:hover:bg-yellow-300 dark:hover:shadow-yellow-300 dark:hover:text-black transition focus:shadow-none ${className}`}>
            {children}
        </LwdLink>
    )
}

export const SkipNav = ({onClick}) => {
    return (
        <a href="#main-content" className="absolute transform -translate-y-[150%] focus:translate-y-0 md:left-16 left-[4.5rem] w-[10rem] p-3 my-3 md:m-3 text-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-70 md:dark:focus:bg-yellow-300" aria-label="skip navigataion" aria-hidden="false" role='button' onClick={onClick}>Skip Navigation</a>
    )
}

export const SkipContent = ({onClick}) => {
    return (
        <a href="#footer" className="absolute transform -translate-y-[150%] focus:translate-y-0 md:left-16 left-[4.5rem] w-[10rem] p-3 my-3 md:m-3 text-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-70 md:dark:focus:bg-yellow-300" aria-label="go to footer" aria-hidden="false" role='button' onClick={onClick}>Go to Footer</a>
    )
}

export const SkipFooter = ({onClick}) => {
    return (
        <a href="#site-control" className="absolute transform -translate-y-[150%] focus:translate-y-0 md:left-16 left-[4.5rem] w-[10rem] p-3 my-3 md:m-3 text-center rounded-md md:shadow-md font-medium text-gray-700 focus:shadow-none dark:text-white dark:text-opacity-70 md:dark:focus:bg-yellow-300" aria-label="go to site control" aria-hidden="false" role='button' onClick={onClick}>Go to Site Control</a>
    )
}

export default Button