import React, { useState, useEffect } from 'react'
import Layout from '../components/page/layout'
import Maintainence from '../components/maintainence'
import {SiteNotification} from '../components/notification'
import Hero from '../components/hero'
import {graphql, Link} from 'gatsby'
  
const IndexPage = ({location, data}) => {
  const {heroLink,heroH1,heroImage} = data.strapiFrontPage.Hero

  //Fetch Notification
  const [notification, setNotification] = useState()
  const [maintainenceMode, setmaintainenceMode] = useState(false)
  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/front-page?_limit=1000&_locale=en&_publicationState=preview`).then(response => response.json()).then(resultData => {
      setNotification(resultData.Notification)
      setmaintainenceMode(resultData.maintainenceMode)
    })
  },[])

  if (maintainenceMode) {
    return (
      <Maintainence />
    )
  }
  return (
    <Layout pageTitle="Hi! My name is Liwen Duan." location={location}>
      {notification && <SiteNotification NotificationType={notification.WarningClass} Content={notification.NotificationContent} /> }

      <Hero imageData={heroImage}>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl text-middle p-5 md:p-10 overflow-auto">{heroH1}</h1>
        <Link to={heroLink.heroLinkUrl} className="w-28 p-3 my-3 text-center rounded-md shadow-md font-medium text-white bg-blue-500 hover:text-black focus:text-black hover:bg-yellow-300 focus:bg-yellow-300 transition">{heroLink.heroLinkTitle}</Link>
      </Hero>

      <p className="h-screen bg-yellow-50">I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql `
query getFrontPage {
  strapiFrontPage {
    Hero {
      heroLink {
        heroLinkTitle
        heroLinkUrl
      }
      heroH1
      heroImage {
        alternativeText
        localFile {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`