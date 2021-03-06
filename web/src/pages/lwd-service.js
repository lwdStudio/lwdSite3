import React, { useState, useEffect } from 'react'
import Layout from '../components/page/layout'
import Seo from "../components/seo"
import { LwdServiceCard } from '../components/card'
import {SiteNotification} from '../components/notification'
import { ClientOnly } from '../components/utility'
import {graphql} from 'gatsby'

const LwdServiceIndex = ({location, data}) => {
  const {pageDescription, servicesCard} = data.allStrapiLwdService.nodes[0]
  const [notification, setNotification] = useState()
  useEffect(() => {
    async function fetchMaintainence() {
      let response = await fetch(`${process.env.GATSBY_STRAPI_API_URL}/lwd-service?_limit=1000&_locale=en`)
      response = await response.json()
      setNotification(response.ServiceNotification)
    }
    fetchMaintainence()
  },[])
  const pageTitle = "lwdService"

  return (
    <Layout pageType={pageTitle} location={location}>
      <Seo title={pageTitle} description={pageDescription} pathname={location.pathname}/>
      <ClientOnly>
        {notification && <SiteNotification NotificationType={notification.WarningClass} Content={notification.NotificationContent} /> }
      </ClientOnly>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-4">All lwdServices</h1>
        <p className="px-4 pb-4">{pageDescription}</p>
        
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
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        serviceIsPoweredBy
        serviceIsPoweredByUrl
        serviceLink
        serviceName
        serviceNameAdditionalInfo
      }
      pageDescription
    }
  }
}
`
