import React from 'react'
import { Link } from 'gatsby'
import { LwdLink } from './page/link'
import { GatsbyImage } from 'gatsby-plugin-image'


export const ArticleCard = ({posts}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <div className="self-center rounded-lg shadow-md">
                <GatsbyImage 
                    className="md:max-w-7xl w-72 md:h-auto h-48 rounded-lg object-cover align-middle"
                    image={posts.CoverImage&&posts.CoverImage.localFile.childrenImageSharp[0].gatsbyImageData}
                />
            </div>
            
            <div className="flex-col p-5 content-center rounded-b-lg">
                <span className="text-sm font-bold text-green-500">{posts.tags&&"#"+posts.tags[0].tagName}</span>
                <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={`/${posts.pageSlug}`} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{posts.pageTitle}</Link></h2>
                <div className="text-md font-regular text-gray-500">{posts.Excerpt}</div>
            </div>
        </div>
    )
}

export const PageCard = ({pages}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <div className="flex-col p-5 content-center">
              <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={`/tos/${pages.node.pageSlug}`} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{pages.node.pageTitle}</Link></h2>
            </div>
        </div>
    )
}

export const LwdServiceCard = ({Service}) => {
    return (
        <div className="flex flex-col w-64 h-auto rounded-lg shadow-md m-5">
            <div className="w-64 h-32 rounded-lg shadow-md">
                {
                    Service.serviceIcon && (
                        <img className="w-64 h-32 object-scale-down justify-items-center p-5"
                        src={`${process.env.GATSBY_STRAPI_API_URL}`+ Service.serviceIcon.url}
                        alt={Service.serviceIcon.alternativeText}
                        />
                    )
                }
                
            </div>
            <div className="flex-col p-5 content-center rounded-b-lg">
                <span className="text-sm font-bold text-green-500">{Service.serviceDescription}</span>
                <h2 className={`text-xl font-bold py-1`}>
                    <LwdLink LinkTo={Service.serviceLink}>{Service.serviceName}</LwdLink>           
                </h2>
                <p className="py-1">Powered by <LwdLink LinkTo={Service.serviceIsPoweredByUrl}>{Service.serviceIsPoweredBy}</LwdLink></p>
            </div>
        </div>
    )
}

export const InfoCard = ({info}) => {
    return (
        <div className="p-8 mb-2 shadow-md rounded-md bg-white">
            <div className="md:flex mb-4">
                <h3>{info.Title}</h3>
                <div className="md:flex-grow"></div>
                <span className="md:float-right">{info.FromDate} - {info.ToDate}</span>
            </div>
            <h4>{info.Location}</h4>
        </div>  
    )
}

export const ContactCard = ({contactInfo}) => {
    return (
        <div className="flex p-8 m-2 shadow-md rounded-md bg-white">
            {/* <GatsbyImage 
                className="object-cover h-6 w-6"
                image={contactInfo.ContactIcon.localFile.childrenImageSharp[0] && contactInfo.ContactIcon.localFile.childrenImageSharp[0].gatsbyImageData}
            /> */}
            <LwdLink LinkTo={contactInfo.Contact} className="px-1">{contactInfo.ContactMethod}</LwdLink>
        </div>
    )
}

export const CertificateCard = ({certificateInfo}) => {
    return (
        <div className="p-8 mb-2 shadow-md rounded-md bg-white">
            <div className="md:flex mb-4">
                <h3>{certificateInfo.CertificateName}</h3>
                <div className="md:flex-grow"></div>
                <span className="md:float-right">{certificateInfo.IssueDate}</span>
            </div>
            <div className="md:flex mb-4">
                <h4>{certificateInfo.IssueAgency}</h4>
                <div className="md:flex-grow"></div>
                <LwdLink LinkTo={certificateInfo.CertificateLink} className="md:float-right">See Certificate</LwdLink>
            </div>
        </div>
    )
}

export const ShowcaseCard = ({showcaseArticle}) => {
    return (
        <div className="flex flex-col w-72 rounded-lg shadow-md m-5 min-h-1/2 bg-white">
            <div className="rounded-lg shadow-md">
                <GatsbyImage 
                    className="md:max-w-7xl w-72 md:h-auto h-48 rounded-lg object-cover align-middle"
                    image={showcaseArticle.CoverImage && showcaseArticle.CoverImage.localFile.childImageSharp.gatsbyImageData}
                />
            </div>

            <div className="flex-col p-5 content-center rounded-b-lg">
                <span className="text-sm font-bold text-green-500">{showcaseArticle.tags&&"#"+showcaseArticle.tags[0].tagName}</span>
                <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={`/${showcaseArticle.pageSlug}`} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{showcaseArticle.pageTitle}</Link></h2>
                <div className="text-md font-regular text-gray-500">{showcaseArticle.Excerpt}</div>
            </div>
        </div>
    )
}