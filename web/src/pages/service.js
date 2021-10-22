import React, { useState, useEffect } from 'react'
import Layout from '../components/page/layout'
import SEO from "../components/seo"
import { LwdServiceCard } from '../components/card'
import {SiteNotification} from '../components/notification'
import {graphql} from 'gatsby'

const LwdServiceIndex = ({location, data}) => {
  const {pageDescription, servicesCard} = data.allStrapiLwdService.nodes[0]
  const [notification, setNotification] = useState()
  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/lwd-service?_limit=1000&_locale=en`).then(response => response.json()).then(resultData => {
      setNotification(resultData.ServiceNotification)
    })
  },[])

  return (
    <Layout pageType="lwdService" location={location}>
      <SEO title='lwdService' description={pageDescription} pathname={location.pathname}/>
      {notification && <SiteNotification NotificationType={notification.WarningClass} Content={notification.NotificationContent} /> }
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">All lwdService</h1>
        <p className="pb-4">{pageDescription}</p>
        
        <div className="flex flex-wrap mx-1 justify-center">
          {
            servicesCard.map((service) => {
              return (
                <LwdServiceCard 
                  Service={service}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default LwdServiceIndex

export const query = graphql `
query getlwdService {
  allStrapiLwdService(filter: {locale: {eq: "en"}}) {
    nodes {
      servicesCard {
        serviceDescription
        serviceIcon {
          url
          alternativeText
        }
        serviceIsPoweredBy
        serviceIsPoweredByUrl
        serviceLink
        serviceName
      }
      pageDescription
    }
  }
}
`
