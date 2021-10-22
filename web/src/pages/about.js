import React from 'react'
import Layout from '../components/page/layout'
import SEO from "../components/seo"
import {InfoCard, ContactCard, CertificateCard} from '../components/card'
import {Button} from '../components/button'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

const AboutPage = ({location, data}) => {
  const {h1, Description, Job, Education, ContactInfo, avatar, Certificate, Resume} = data.strapiAboutMe
  return (
    <Layout location={location} pageType="About me">
      <SEO title="About me" description={Description} image={`${process.env.GATSBY_STRAPI_API_URL}${avatar.url}`} pathname={location.pathname}/>
      <div className="md:container md:mx-auto p-4 ">
        <h1 className="col-span-full text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 pb-8">{h1}</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
          <GatsbyImage 
            className="object-scale-down h-auto w-3/4 p-20 rounded-full shadow-lg place-self-center row-span-2"
            image={avatar && avatar.localFile.childImageSharp.gatsbyImageData}
            alt={avatar && avatar.alternativeText}
            />
          <p>
            {Description}
          </p>
          <Button to={`${process.env.GATSBY_STRAPI_API_URL}${Resume.url}`}>Get my Resume</Button>
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
          <h2 className="text-center font-serif py-8">My Certificates</h2>
          {
            Certificate.map((certificateInfo) => {
              return (
                <CertificateCard certificateInfo={certificateInfo} />
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
      url
      localFile {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, transformOptions: {fit: COVER})
        }
      }
    }
    Certificate {
      CertificateName
      CertificateLink
      IssueAgency
      IssueDate(formatString: "MMM yyyy")
    }
    Resume {
      url
    }
  }
}
`

export default AboutPage