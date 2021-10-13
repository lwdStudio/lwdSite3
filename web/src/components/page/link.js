import React from 'react'
import { Link } from 'gatsby'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const styles = "hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300"

export const LwdLink = ({LinkTo, className, children}) => {
    if (LinkTo.startsWith('/')) {
        return (
            <Link to={LinkTo} className={`${styles} ${className}`}>{children}</Link>
        )
    }
    else if (LinkTo.startsWith('../')) {
        return (
            <Link to={LinkTo} className={`${styles} ${className}`}>{children}</Link>
        )
    }
    return (
        <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className} ${styles}"`}>{children}<ExternalLinkIcon className="h-3 inline px-1 align-middle"/></a>
    )
}
