import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


export const BlogCard = ({posts}) => {
    console.log(posts)
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <div className="rounded-lg shadow-md">
                <GatsbyImage 
                    className="w-full md:w-52 md:h-32 rounded-lg object-cover"
                    image={posts.CoverImage&&posts.CoverImage.localFile.childrenImageSharp[0].gatsbyImageData}
                />
            </div>
            
            <div className="flex-col p-5 content-center rounded-b-lg">
                <span className="text-sm font-bold text-green-500">#{posts.tags&&posts.tags[0].tagName}</span>
                <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={`/blog/${posts.pageSlug}`} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{posts.pageTitle}</Link></h2>
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

export const PortfolioCard = ({posts}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <div className="rounded-lg shadow-md">
                <GatsbyImage 
                    className="w-full md:w-52 md:h-32 rounded-lg object-cover"
                    alt={posts.node.mainImage&&posts.node.mainImage.caption}
                    image={posts.node.mainImage&&posts.node.mainImage.asset.gatsbyImageData}
                />
            </div>
            <div className="flex-col p-5 content-center rounded-b-lg">
                {
                console.log(posts.node.tag)
                // tags.map((tag) => {
                //     return(<span className="text-sm font-bold text-green-500">#{tag}</span>)
                // })}
                }
                <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={`/showcase/${posts.node.slug.current}`} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{posts.node.title}</Link></h2>
                <div className="text-md font-regular text-gray-500">{posts.node.excerpt}</div>
            </div>
        </div>
    )
}

export const LwdServiceCard = ({Service}) => {
    return (
        <div className="flex flex-col w-64 h-auto rounded-lg shadow-md m-5">
            {/* <div className="rounded-lg shadow-md">
                <GatsbyImage 
                    className="w-64 h-32 object-scale-down justify-items-center p-5"
                    alt={Service.node.serviceIcon&&Service.node.serviceIcon.caption}
                    image={Service.node.serviceIcon&&Service.node.serviceIcon.asset.gatsbyImageData}
                />
            </div> */}
            <div className="w-64 h-32 rounded-lg shadow-md">
                {
                    Service.serviceIcon && (
                        <img className="w-64 h-32 object-scale-down justify-items-center p-5"
                        src={`http://localhost:3000`+ Service.serviceIcon.url}
                        alt={Service.serviceIcon.alternativeText}
                        />
                    )
                }
                
            </div>
            <div className="flex-col p-5 content-center rounded-b-lg">
                <span className="text-sm font-bold text-green-500">{Service.serviceDescription}</span>
                <h2 className={`text-2xl font-bold py-1`}>
                    <a href={Service.serviceLink} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5" target="_blank" rel="noreferrer">{Service.serviceName}</a>                 
                </h2>
                <p className="py-1">Powered by <a href={Service.serviceIsPoweredByUrl} target="_blank" rel="noreferrer" className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md">{Service.serviceIsPoweredBy}</a></p>
            </div>
        </div>
    )
}