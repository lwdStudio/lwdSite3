import React, { useState, useEffect } from 'react'
import Layout from '../components/page/layout'
import Seo from "../components/seo"
import Button from '../components/button'
import Hero from '../components/hero'
import {ShowcaseCard} from '../components/card'
import {SiteNotification} from '../components/notification'
import {graphql} from 'gatsby'
import Typewriter from 'typewriter-effect'
  
const IndexPage = ({location, data}) => {
  const {heroLink,heroH1,heroImage} = data.strapiFrontPage.Hero

  //Fetch Notification
  const [notification, setNotification] = useState()
  useEffect(() => {
    async function fetchSiteNotification() {
      let response = await fetch(`${process.env.GATSBY_STRAPI_API_URL}/front-page?_limit=1000&_locale=en`)
      response = await response.json()
      setNotification(response.Notification)
    }
    fetchSiteNotification()
  },[])

  return (
    <Layout pageTitle={heroH1} location={location}>
      <Seo title={heroH1} pathname={location.pathname} />
      {notification && <SiteNotification NotificationType={notification.WarningClass} Content={notification.NotificationContent} /> }
      <Hero imageData={heroImage}>
        <h1 className="text-white font-extrabold leading-relax font-serif text-4xl md:text-6xl text-middle p-5 md:p-24 overflow-auto dark:text-gray-100">
          <Typewriter
            options={{
              strings: heroH1,
              autoStart: true,
              loop: true,
              pauseFor: 10000,
            }}
          />
        </h1> 
        <Button to={heroLink.heroLinkUrl}>{heroLink.heroLinkTitle}</Button>
      </Hero>

      <section className="px-4 md:px-16 py-8">
        <h2 className="text-2xl dark:text-gray-200">Selected Work & Reading</h2>
        <span className="text-gray-600 dark:text-gray-400">Explore my recent projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 py-4 px-4 xs:px-0">
        {
          data.strapiFrontPage.Showcase[0].pages.map((showcaseArticle) => {
            return (
              <ShowcaseCard article={showcaseArticle}/>
            )
          })
        }
        </div>
      </section>

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