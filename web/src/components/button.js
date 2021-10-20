import React from "react"
import {LwdLink} from './page/link'

export const Button = ({to, className, children}) => {
    return (
        <LwdLink LinkTo={to} className={`w-32 p-3 my-3 text-center rounded-md shadow-md font-medium text-white bg-blue-500 hover:bg-yellow-300 transition focus:shadow-none ${className}`}>
            {children}
        </LwdLink>
    )
}

export default Button