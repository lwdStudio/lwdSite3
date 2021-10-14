import React, { useState, useEffect } from 'react'
import Layout from '../components/page/layout'
import Button from '../components/button'
import Maintainence from '../components/maintainence'
import Hero from '../components/hero'
import {FrontPageShowcaseCard} from '../components/card'
import {SiteNotification} from '../components/notification'
import {graphql} from 'gatsby'
  
const IndexPage = ({location, data}) => {
  const {heroLink,heroH1,heroImage} = data.strapiFrontPage.Hero

  //Fetch Notification
  const [notification, setNotification] = useState()
  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/front-page?_limit=1000&_locale=en&_publicationState=preview`).then(response => response.json()).then(resultData => {
      setNotification(resultData.Notification)
    })
  },[])

  //Fetch MaintainenceStatus
  const [maintainenceMode, setmaintainenceMode] = useState(false)
  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/maintainence-mode?_limit=1000&_locale=en&_publicationState=preview`).then(response => response.json()).then(resultData => {
      setmaintainenceMode(resultData.maintainenceModeSwitch)
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
        <h1 className="text-white font-extrabold text-4xl md:text-6xl text-middle p-5 md:p-24 overflow-auto">{heroH1}</h1>
        <Button to={heroLink.heroLinkUrl}>{heroLink.heroLinkTitle}</Button>
      </Hero>

      <section className="px-16 py-8">
        <h2 className="text-2xl ">Selected Work & Reading</h2>
        <span className="text-gray-600">Explore my recent projects</span>
        <div className="md:bg-gray-50 flex md:p-10 flex-col md:flex-row place-items-center md:overflow-x-auto md:shadow-inner rounded-md md:mt-10">
        {
          data.strapiFrontPage.Showcase[0].pages.map((showcaseArticle) => {
            return (
              <FrontPageShowcaseCard showcaseArticle={showcaseArticle} />
            )
          })
        }
        </div>
      </section>

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
    Showcase {
      pages {
        pageTitle
        pageSlug
        Excerpt
        CoverImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`