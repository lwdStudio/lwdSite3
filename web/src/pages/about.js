import React from 'react'
import Layout from '../components/page/layout'
import {InfoCard, ContactCard} from '../components/card'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

const AboutPage = ({location, data}) => {
  const {h1, Description, Job, Education, ContactInfo, avatar} = data.strapiAboutMe
  return (
    <Layout pageType="About me" location={location}>
      <div className="md:container md:mx-auto p-4 ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h1 className="col-span-full text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">{h1}</h1>
          <GatsbyImage 
            className="scale-50 h-auto w-3/4 p-20 rounded-full shadow-lg place-self-center"
            image={avatar && avatar.localFile.childImageSharp.gatsbyImageData}
            alt={avatar && avatar.alternativeText}
            />
          <p>{Description}</p>
        </section>
        <section className="p-5">
          <h2 className="text-center font-serif py-8">My Experience</h2>
          {
            Job.map((info) => {
              return (
                <InfoCard info={info} />
              )
            })
          }
        </section>
        <section className="p-5">
          <h2 className="text-center font-serif py-8">My Education</h2>
          {
            Education.map((info) => {
              return (
                <InfoCard info={info} />
              )
            })
          }
        </section>
        <section className="p-5">
          <h2 className="text-center font-serif py-8">Get in touch</h2>
          <div className="md:flex-row flex-col flex">
            {
              ContactInfo.map((info) => {
                return (
                  <ContactCard contactInfo={info} />
                )
              })
            }
          </div>

        </section>
      </div>
    </Layout>
  )
}

export const query = graphql `
query getAboutMe {
  strapiAboutMe {
    h1
    Description
    Job {
      Title
      Location
      FromDate(formatString: "MMM yyyy")
      ToDate(formatString: "MMM yyyy")
    }
    Education {
      Title
      Location
      FromDate(formatString: "MMM yyyy")
      ToDate(formatString: "MMM yyyy")
    }
    ContactInfo {
      ContactMethod
      Contact
      ContactIcon {
        localFile {
          childrenImageSharp {
            gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER})
          }
          url
        }
      }
    }
    avatar {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER})
        }
      }
    }
  }
}
`

export default AboutPage