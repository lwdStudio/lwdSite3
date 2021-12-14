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
            <div className="flex gap-1">
                <FontAwesomeIcon icon={faEnvelope} className="self-center scale-125"/>
                <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className} px-1`} {...props}> {children}</a>
            </div>
            
        )
    } else if (LinkTo.startsWith('tel:')) {
        return (
            <div className="flex gap-1">
                <FontAwesomeIcon icon={faPhoneAlt} className="self-center scale-125"/>
                <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className} px-1`} {...props}> {children}</a>
            </div>
        )
    }
    return (
        <a href={LinkTo} target="_blank" rel="noreferrer" className={`${className}`} {...props}>{children} <FontAwesomeIcon icon={faExternalLinkAlt} className="scale-75 self-center"/></a>
    )
}
