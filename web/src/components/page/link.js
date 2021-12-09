import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export const LwdLink = ({LinkTo, className, children, ...props}) => {
    if (LinkTo.startsWith("/")||LinkTo.startsWith("../")||LinkTo.startsWith("#")) {
        return (
            <Link to={LinkTo} className={`${className}` } {...props}>{children}</Link>
        )
    } else if (LinkTo.startsWith('mailto:')) {
        return (
            <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`} {...props}><FontAwesomeIcon icon={faEnvelope} className="scale-75 self-center"/> {children}</a>
        )
    } else if (LinkTo.startsWith('tel:')) {
        return (
            <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`} {...props}><FontAwesomeIcon icon={faPhoneAlt} className="scale-75 self-center"/> {children}</a>
        )
    }
    return (
        <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`} {...props}>{children} <FontAwesomeIcon icon={faExternalLinkAlt} className="scale-75 self-center"/></a>
    )
}
