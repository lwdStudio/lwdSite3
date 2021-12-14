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

export default Button