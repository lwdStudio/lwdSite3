import React from 'react'
import { LwdLink } from './page/link'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

export const ArticleCard = ({posts}) => {
    return (
        <div className="flex flex-col md:flex-row card-common m-5">
            {posts.CoverImage && 
                <GatsbyImage 
                    className="flex-none w-full md:w-72 relative card-common"
                    image={posts.CoverImage.localFile.childImageSharp.gatsbyImageData}
                    alt={posts.CoverImage.alternativeText}
                    imgClassName="w-full h-full rounded-lg"
                    objectFit="cover"
                />
            }
            
            <div className="flex-auto p-6">
                <span className="tag">{posts.tags&&"#"+posts.tags[0].tagName}</span>
                <h2 className="text-2xl"><LwdLink LinkTo={`/${posts.pageSlug}`} className="p-0.5">{posts.pageTitle}</LwdLink></h2>
                <p className="text-md font-normal text-gray-500 dark:text-gray-400">{posts.Excerpt.slice(0,160)+'...'}</p>
            </div>
        </div>
    )
}

export const PageCard = ({pages}) => {
    return (
        <div className="flex flex-col md:flex-row mb-5 card-common">
            <div className="flex-col p-5 content-center">
              <h2 className="text-2xl"><LwdLink LinkTo={`/tos/${pages.node.pageSlug}`} className="p-0.5">{pages.node.pageTitle}</LwdLink></h2>
            </div>
        </div>
    )
}

export const LwdServiceCard = ({Service}) => {
    return (
        <div className="flex flex-col w-72 h-auto m-5 card-common">
            {
                Service.serviceIcon.localFile.childImageSharp ? 
                <GatsbyImage
                    image={Service.serviceIcon.localFile.childImageSharp.gatsbyImageData}
                    alt={Service.serviceIcon.alternativeText}
                    className="w-72 h-36 rounded-t-lg shadow-inner dark:bg-gray-700 bg:opacity-50 bg-gray-50"
                    imgClassName="w-72 h-36 justify-items-center"
                    imgStyle={{"padding":"1.25rem"}}
                    objectFit='scale-down'
                /> :
                <div className="w-72 h-36 rounded-t-lg shadow-inner dark:bg-gray-700 bg:opacity-50 bg-gray-50">
                    <img className="w-72 h-36 object-scale-down justify-items-center p-5"
                    src={`${process.env.GATSBY_STRAPI_API_URL}`+ Service.serviceIcon.url}
                    alt={Service.serviceIcon.alternativeText}
                    loading={`lazy`}
                />
                </div>
    
            }
            <div className="flex-col p-5 content-center rounded-b-lg">
                <span className="tag">{Service.serviceDescription}</span>
                <h2 className={`text-xl font-bold py-1`}>
                    <LwdLink LinkTo={Service.serviceLink}>{Service.serviceName}</LwdLink>           
                </h2>
                {Service.serviceNameAdditionalInfo && <p className="py-1 m-0 text-gray-500 text-xs font-light dark:text-gray-400">{Service.serviceNameAdditionalInfo}</p>}
                <p className="py-1 mb-0">Powered by <LwdLink LinkTo={Service.serviceIsPoweredByUrl}>{Service.serviceIsPoweredBy}</LwdLink></p>
            </div>
        </div>
    )
}

export const InfoCard = ({info}) => {
    return (
        <div className="about-card card-common">
            <div className="md:flex mb-4">
                <h3>{info.Title}</h3>
                <div className="md:grow"></div>
                <span className="md:float-right">{info.FromDate} - {info.ToDate}</span>
            </div>
            <h4>{info.Location}</h4>
        </div>  
    )
}

export const ContactCard = ({contactInfo}) => {
    library.add(fab)
    return (
        <div className="flex card-common about-card gap-1 grow md:grow-0 justify-center align-middle">
            <FontAwesomeIcon icon={['fab', contactInfo.ContactMethod.toLowerCase()]} className="self-center scale-125" /> 
            <LwdLink LinkTo={contactInfo.Contact} className="px-1">{contactInfo.ContactMethod}</LwdLink>
        </div>
    )
}

export const SkillCard = ({skill}) => {
    library.add(fab)
    return (
        <div className="flex card-common m-2 px-4 py-2 grow md:grow-0 justify-center align-middle">
            <FontAwesomeIcon icon={['fab', `${skill.fabIcon && skill.fabIcon}`]} className="self-center scale-125" /> 
            <span className="px-2">{skill.SkillName}</span>
        </div>
    )
}

export const CertificateCard = ({certificateInfo}) => {
    return (
        <div className="about-card card-common">
            <div className="md:flex mb-4">
                <h3>{certificateInfo.CertificateName}</h3>
                <div className="md:grow"></div>
                <span className="md:float-right">{certificateInfo.IssueDate}</span>
            </div>
            <div className="md:flex mb-4">
                <h4>{certificateInfo.IssueAgency}</h4>
                <div className="md:grow"></div>
                <LwdLink LinkTo={certificateInfo.CertificateLink} className="md:float-right">See Certificate</LwdLink>
            </div>
        </div>
    )
}

export const ShowcaseCard = ({article}) => {
    return (
        <div className="flex flex-col card-common" key={article.id}>
            <GatsbyImage 
                className="shadow-md h-48"
                image={article.CoverImage && article.CoverImage.localFile.childImageSharp.gatsbyImageData}
                alt={article.CoverImage && article.CoverImage.alternativeText}
                imgClassName="rounded-t-lg h-48 align-middle"
                objectFit="cover"
            />
            <div className="flex-col p-5 w-full rounded-b-lg">
                {article.tags && <span className="tag">{"#"+article.tags[0].tagName}</span>}
                <h2 className="pb-2 font-bold"><LwdLink LinkTo={`/${article.pageSlug}`} className="inline text-2xl">{article.pageTitle}</LwdLink></h2>
                <div className="text-md font-normal text-gray-500 dark:text-gray-400">{article.Excerpt.slice(0,160)+'...'}</div>
            </div>
        </div>
    )
}