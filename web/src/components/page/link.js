import React from 'react'
import { Link } from 'gatsby'
import { ExternalLinkIcon } from '@heroicons/react/outline'

export const LwdLink = ({LinkTo, className, children, ...props}) => {
    if (LinkTo.startsWith('/')) {
        return (
            <Link to={LinkTo} className={`${className}` } {...props}>{children}</Link>
        )
    }
    else if (LinkTo.startsWith('../')) {
        return (
            <Link to={LinkTo} className={`${className}`} {...props}>{children}</Link>
        )
    }
    return (
        <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`} {...props}>{children}<ExternalLinkIcon className="h-3 inline px-1 align-middle"/></a>
    )
}
