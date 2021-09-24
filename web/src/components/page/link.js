import React from 'react'
import { Link } from 'gatsby'

const styles = "hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300"

export const LwdLink = ({LinkTo, className, children}) => {
    if (LinkTo.startsWith('/')) {
        return (
            <Link to={LinkTo} className={`${className} ${styles}`}>{children}</Link>
        )
    }
    else if (LinkTo.startsWith('../')) {
        return (
            <Link to={LinkTo} className={`${className} ${styles}`}>{children}</Link>
        )
    }
    return (
        <a href={LinkTo} className={`${className} ${styles}`}>{children}</a>
    )
}
