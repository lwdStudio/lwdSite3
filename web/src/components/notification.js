import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { MarkdownArticle } from './article'

const notificationIconStyle = "self-start scale-150 my-8 mx-4"
const notificationBarStyle = "bg-opacity-20 w-full text-black rounded-b-lg shadow-md align-middle dark:bg-opacity-50 dark:text-white dark:text-opacity-60 flex flex-row "
const notificationTextStyle = "notification"

const InfoNotification = ({Content}) => {
  return (
    <section className={`bg-yellow-600 ${notificationBarStyle}`}>
      <FontAwesomeIcon icon={faInfoCircle} className={notificationIconStyle} />
      <MarkdownArticle article={Content} className={notificationTextStyle} />
    </section>
  )
}

const WarningNotification = ({Content}) => {
  return (
    <section className={`bg-red-600 ${notificationBarStyle}`}>
      <FontAwesomeIcon icon={faExclamationTriangle} className={notificationIconStyle} />
      <MarkdownArticle article={Content} className={notificationTextStyle} />
    </section>
  )
}

const ClearNotification = ({Content}) => {
  return (
    <section className={`bg-green-600 ${notificationBarStyle}`}>
      <FontAwesomeIcon icon={faCheckCircle} className={notificationIconStyle} />
      <MarkdownArticle article={Content} className={notificationTextStyle} />
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