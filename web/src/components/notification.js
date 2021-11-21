import React from 'react'
import { LwdLink } from './page/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Reactmarkdown from "react-markdown"

const notificationIconStyle = "self-start scale-150 m-4"
const notificationBarStyle = "bg-opacity-20 w-full text-black p-3 rounded-b-lg shadow-md align-middle dark:bg-opacity-50 dark:text-white dark:text-opacity-60 flex flex-row text-xs"

const InfoNotification = ({Content}) => {
  return (
    <section className={`bg-yellow-600 ${notificationBarStyle}`}>
      <FontAwesomeIcon icon={faInfoCircle} className={notificationIconStyle} />
      <Reactmarkdown 
        className="self-center p-0"
        children={Content} 
        transformImageUri={uri => 
            uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
        components={
          {
            a ({node, className, children, ...props}) {
              return (
                <LwdLink LinkTo={props.href} className={className} {...props}>{children}</LwdLink>
              )
            }
          }
        }
      />
    </section>
  )
}

const WarningNotification = ({Content}) => {
  return (
    <section className={`bg-red-600 ${notificationBarStyle}`}>
      <FontAwesomeIcon icon={faExclamationTriangle} className={notificationIconStyle} />
      <Reactmarkdown 
        className="self-center p-0"
        children={Content} 
        transformImageUri={uri => 
            uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
        components={
          {
            a ({node, className, children, ...props}) {
              return (
                <LwdLink LinkTo={props.href} className={className} {...props}>{children}</LwdLink>
              )
            }
          }
        }
      />
    </section>
  )
}

const ClearNotification = ({Content}) => {
  return (
    <section className={`bg-green-600 ${notificationBarStyle}`}>
      <FontAwesomeIcon icon={faCheckCircle} className={notificationIconStyle} />
      <Reactmarkdown 
        className="self-center p-0"
        children={Content} 
        transformImageUri={uri => 
            uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
        components={
          {
            a ({node, className, children, ...props}) {
              return (
                <LwdLink LinkTo={props.href} className={className} {...props}>{children}</LwdLink>
              )
            }
          }
        }
      />
    </section>
  )
}

export const SiteNotification = ({Content, NotificationType}) => {
  if (NotificationType === "Info") {
    return (
      <InfoNotification Content={Content} />
    )
  }
  else if (NotificationType === "Warning") {
    return (
      <WarningNotification Content={Content} />
    )
  }
  else if (NotificationType === "Clear") {
    return (
      <ClearNotification Content={Content} />
    )
  }
}

export default SiteNotification