import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'
import { LwdLink } from './page/link'
import { Button } from '../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Maintainence = () => {
    const [maintainenceModeTitle, setmaintainenceModeTitle] = useState()
    const [maintainenceModeMessage, setmaintainenceModeMessage] = useState()

    useEffect(() => {
        fetch(`${process.env.GATSBY_STRAPI_API_URL}/maintainence-mode?_limit=1000&_locale=en`).then(response => response.json()).then(resultData => {
            setmaintainenceModeTitle(resultData.maintainenceModeTitle)
            setmaintainenceModeMessage(resultData.maintainenceModeMessage)
    })
  },[])

    return(
        <div className="text-white">
            <StaticQuery 
                query={graphql`
                    query getSiteInfoForMaintainencePage {
                        site {
                            siteMetadata {
                                title
                                ICPlicense
                                PSBeian
                                PSBeianURL
                            }
                        }
                    }
                `}
                render={data => 
                    <div className="">
                        <Helmet defer={false}>
                            <title> Coming Back Soon | {data.site.siteMetadata.title} </title>
                        </Helmet>
                        <div className="p-5 text-center align-middle bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen min-h-screen max-h-screen">
                            <div className="flex h-auto pt-20 focus:ring-2 focus:ring-yellow-300 rounded-lg focus:text-black focus:bg-yellow-300 w-full justify-center">
                                <StaticImage
                                    src="../images/lwd-stamp.png"
                                    alt="Liwen Duan's Logo"
                                    layout="fixed"
                                    width={50}
                                    height={50} />
                                <span className="inline-flex p-3 text-2xl font-serif ">{data.site.siteMetadata.title}</span>
                            </div>
                            <h1 className="p-5 text-3xl ">{maintainenceModeTitle}</h1>
                            <p>{maintainenceModeMessage}</p>
                            <div className="m-10">
                                <p className="mb-5">View Changes on</p>
                                <Button to="https://github.com/lwdStudio/lwdSite3"><FontAwesomeIcon icon={faGithub} /> GitHub</Button>
                            </div>
                            <footer>                  
                                <div className="flex flex-col md:flex-row w-full justify-center text-center text-white">
                                    <p className="m-3 p-1">Copyright © {new Date().getFullYear()} Liwen Duan</p>
                                    <LwdLink LinkTo="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer" className="m-3 p-1 text-white">{data.site.siteMetadata.ICPlicense}</LwdLink>
                                    <LwdLink LinkTo={data.site.siteMetadata.PSBeianURL} target="_blank" rel="noreferrer" className="m-3 p-1 text-white">{data.site.siteMetadata.PSBeian}</LwdLink>
                                </div>
                            </footer>
                        </div>
                    </div>
                }
            />
        </div>

    )
}

export default Maintainence