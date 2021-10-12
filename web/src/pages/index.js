import React, { useState, useEffect } from 'react'
import Layout from '../components/page/layout'
import Maintainence from '../components/maintainence'
import {SiteNotification} from '../components/notification'
// import {graphql} from 'gatsby'

const IndexPage = ({location, data}) => {
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
      <p className="h-screen">I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

// export const query = graphql `
// query FrontPageQuery {
//   allStrapiFrontPage {
//     edges {
//       node {
        
//       }
//     }
//   }
// }
// `