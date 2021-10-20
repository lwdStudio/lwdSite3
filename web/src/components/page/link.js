import React from 'react'
import { Link } from 'gatsby'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export const LwdLink = ({LinkTo, className, children}) => {
    if (LinkTo.startsWith('/')) {
        return (
            <Link to={LinkTo} className={`${className}`}>{children}</Link>
        )
    }
    else if (LinkTo.startsWith('../')) {
        return (
            <Link to={LinkTo} className={`${className}`}>{children}</Link>
        )
    }
    return (
        <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`}>{children}<ExternalLinkIcon className="h-3 inline px-1 align-middle"/></a>
    )
}
