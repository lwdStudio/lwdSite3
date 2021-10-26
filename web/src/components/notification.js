import React from 'react'
import {InformationCircleIcon, ExclamationIcon, CheckCircleIcon} from '@heroicons/react/outline'
import Reactmarkdown from "react-markdown"

const InfoNotification = ({Content}) => {
  return (
    <section className="bg-yellow-600 bg-opacity-20 w-full text-black p-3 rounded-b-lg shadow-md align-middle dark:bg-opacity-50 dark:text-white dark:text-opacity-60 flex flex-col md:flex-row text-xs">
      <InformationCircleIcon className="self-center h-8 pr-2" />
      <Reactmarkdown 
        className="self-center p-0"
        children={Content} 
        transformImageUri={uri => 
            uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
      />
    </section>
  )
}

const WarningNotification = ({Content}) => {
  return (
    <section className="bg-red-600 bg-opacity-20 w-full text-black p-3 rounded-b-lg shadow-md align-middle dark:bg-opacity-50 dark:text-white dark:text-opacity-60 flex flex-col md:flex-row text-xs">
      <ExclamationIcon className="self-center h-8 pr-2" />
      <Reactmarkdown 
        className="self-center p-0"
        children={Content} 
        transformImageUri={uri => 
            uri.startsWith("http") ? uri : `${process.env.GATSBY_IMAGE_API_URL}${uri}`}
      />
    </section>
  )
}

const ClearNotification = ({Content}) => {
  return (
    <section className="bg-green-600 bg-opacity-20 w-full text-black p-3 rounded-b-lg shadow-md align-middle dark:bg-opacity-50 dark:text-white dark:text-opacity-60 flex flex-col md:flex-row text-xs">
      <CheckCircleIcon className="self-center h-8 pr-2" />
      <Reactmarkdown 
        className="self-center p-0"
        children={Content} 
        transformImageUri={uri => 
            uri.startsWith("http") ? uri : `${process.env.GATSBY_IMAGE_API_URL}${uri}`}
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