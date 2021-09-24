import * as React from 'react'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'

const Maintainence = () => {
    return(
        <div className="text-white">
            <Helmet defer={false}>
                <title>Coming back soon | lwdSite</title>
            </Helmet>
            <div className="p-5 min-h-screen max-h-screen text-center align-middle bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                <div className="flex h-auto pt-20 focus:ring-2 focus:ring-yellow-300 rounded-lg focus:text-black focus:bg-yellow-300 w-full justify-center">
                    <StaticImage
                        src="../images/lwd-stamp.png"
                        alt="Liwen Duan's Logo"
                        layout="fixed"
                        width={50}
                        height={50} />
                    <span className="inline-flex p-3 text-2xl font-serif ">lwdSite</span>
                </div>
                <h1 className="p-5 text-3xl ">Coming back soon</h1>
                <p className="">We are refreshing our site to bring you new experience. Stay tuned.</p>
                <a href="https://github.com/lwdStudio/lwdSite3" className="w-auto justify-center">
                    GitHub
                </a>
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
                        <footer>                  
                            <div className="flex flex-col md:flex-row w-full justify-center text-center">
                                <p className="m-3 p-1">Copyright © {new Date().getFullYear()} Liwen Duan</p>
                                <a href="http://beian.miit.gov.cn/" className="m-3 p-1">{data.site.siteMetadata.ICPlicense}</a>
                                <a href={data.site.siteMetadata.PSBeianURL} className="m-3 p-1">{data.site.siteMetadata.PSBeian}</a>
                            </div>
                        </footer>
                    }
                />
            </div>
        </div>
    )
}

export default Maintainence