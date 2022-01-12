import React from 'react'
import Layout from '../components/page/layout'
import Seo from "../components/seo"
import {InfoCard, ContactCard, CertificateCard, SkillCard} from '../components/card'
import {Button} from '../components/button'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

const AboutPage = ({location, data}) => {
  const {h1, Description, Job, Education, ContactInfo, avatar, Certificate, Resume, Skills} = data.strapiAboutMe
  return (
    <Layout location={location} pageType="About me">
      <Seo title="About me" description={Description} image={`${process.env.GATSBY_STRAPI_API_URL}${avatar.url}`} pathname={location.pathname}/>
      <div className="md:container md:mx-auto p-4 ">
        <h1 className="col-span-full text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 pb-8">{h1}</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
          <div className="place-self-center row-span-2 h-auto w-3/4">
            <GatsbyImage 
                className="overflow-hidden rounded-full shadow-lg"
                image={avatar && avatar.localFile.childImageSharp.gatsbyImageData}
                alt={avatar && avatar.alternativeText}
              />
          </div>

          <p>
            {Description}
          </p>
          <Button to={`${process.env.GATSBY_STRAPI_API_URL}${Resume.url}`}>Get my Resume</Button>
        </section>
        
        <section className="p-5">
          <h2 className="text-center font-serif py-8">Experiences</h2>
          {
            Job.map((info) => {
              return (
                <InfoCard info={info} />
              )
            })
          }
        </section>

        <section className="p-5">
          <h2 className="text-center font-serif py-8">Education</h2>
          {
            Education.map((info) => {
              return (
                <InfoCard info={info} />
              )
            })
          }
        </section>

        <section className="p-5">
          <h2 className="text-center font-serif py-8">Awards & Certificates</h2>
          {
            Certificate.map((certificateInfo) => {
              return (
                <CertificateCard certificateInfo={certificateInfo} />
              )
            })
          }
        </section>
        
        <section className="p-5">
          <h2 className="text-center font-serif py-8">Skills</h2>
          {
            Skills.map((skillCatagories) => {
              return (
                <div id={skillCatagories.id} className="grid grid-cols-2 sm:grid-cols-3">
                  <h3 className="col-span-2 sm:col-span-1 p-4">{skillCatagories.SkillCatagory}</h3>
                  <div className="col-span-2 flex flex-wrap p-2">
                  {
                    skillCatagories.Skill.map((skill) => {
                      return (
                          <SkillCard skill={skill} />
                          )
                        })
                      }
                  </div>
                </div>
              )
            })
          }
        </section>

        <section className="p-5">
          <h2 className="text-center font-serif py-8">Get in touch</h2>
          <div className="flex flex-wrap sm:justify-start justify-center align-middle">
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
    Skills {
      SkillCatagory
      id
      Skill {
        id
        SkillName
        fabIcon
      }
    }
  }
}
`

export default AboutPage