import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

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
        <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`} {...props}>{children} <FontAwesomeIcon icon={faExternalLinkAlt} className="scale-75 self-center"/></a>
    )
}
