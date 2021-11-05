import React from 'react'
import { LwdLink } from './link'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'

const footerTextColor = 'text-gray-500 dark:text-gray-300'
const footerLinkStyle = `${footerTextColor} p-1.5 rounded-md`

export const FooterText = ({children}) => {
    return (
        <div className="py-1 px-4 lg:py-0">
            <p className={`flex ${footerTextColor} justify-center lg:justify-start m-0`}>{children}</p>
        </div>
        
    )
}
export const FooterLink = ({LinkTo, children}) => {
    return (
        <FooterText><LwdLink LinkTo={LinkTo} className={`${footerTextColor} px-1.5 rounded-md`} >{children}</LwdLink></FooterText>
    )
}

const Footer = () => {
    return (
        <StaticQuery 
            query={graphql`
                query getSiteInfo {
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
                <footer className="p-1 bg-gray-100 shadow-sm rounded-lg z-50 dark:bg-gray-800 dark:text-white text-center md:text-left">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 mx-8 place-items-stretch">
                        <section className="pt-2">
                            <FooterLink LinkTo="/">
                                <div className="flex space-x-2 h-auto px-8 py-2 justify-center">
                                    <div className="h-8 w-8 object-cover">
                                        <StaticImage 
                                            src="../../images/lwd-stamp.png"
                                            alt="Liwen Duan's Logo"
                                            placeholder="blurred"
                                        />
                                    </div>
                                    <span className="inline-flex py-1 text-lg font-serif text-black dark:text-gray-200      dark:text-opacity-80">{data.site.siteMetadata.title}</span>
                                </div>
                            </FooterLink>
                            <div className="my-2 md:ml-12">
                                <ul className="list-none m-0 p-0">
                                    <li><LwdLink className={footerLinkStyle} LinkTo="/tos">Legal Terms</LwdLink></li>
                                    <li><LwdLink className={footerLinkStyle} LinkTo="https://status.liwenduan.com">System Status</LwdLink></li>
                                </ul>
                            </div>

                        </section>
                        <section className="pt-2">
                            <h1 className={`${footerTextColor} font-extrabold text-lg md:text-2xl`}>Get in touch?</h1>
                            <p className='p-0'>Send an email to: <br /><LwdLink className={footerLinkStyle} LinkTo="mailto:hi@liwenduan.com">hi@liwenduan.com</LwdLink></p>
                            <p className='p-0'>Connect with me on: <br /><LwdLink className={footerLinkStyle} LinkTo="https://www.linkedin.com/in/lwd">LinkedIn</LwdLink></p>
                        </section>
                        {/* <section className="pt-2">
                            <h1 className={`${footerTextColor} font-extrabold text-lg md:text-2xl`}>Set your experience:</h1>
                            <ul className="list-none m-0 mt-1 p-0">
                                <li>Dark mode: <LwdLink className={footerLinkStyle} LinkTo="/">on</LwdLink></li>
                                <li>Language: <LwdLink className={footerLinkStyle} LinkTo="/">English</LwdLink></li>
                            </ul>
                        </section> */}
                        <section className="pt-2">
                            <h1 className={`${footerTextColor} font-extrabold text-lg md:text-2xl`}>Explore</h1>
                            <ul className="list-none m-0 mt-1 p-0">
                                <li><LwdLink className={footerLinkStyle} LinkTo="/blog">Blog</LwdLink></li>
                                <li><LwdLink className={footerLinkStyle} LinkTo="/showcase">Showcase</LwdLink></li>
                                <li><LwdLink className={footerLinkStyle} LinkTo="/lwdService">lwdService</LwdLink></li>
                                <li><LwdLink className={footerLinkStyle} LinkTo="/about">About me</LwdLink></li>
                            </ul>
                        </section>
                    </div>
                    <hr className='m-8 mb-4 opacity-80' />
                    <div className="grid grid-flow-row auto-rows-max px-8 pb-4 text-xs lg:grid-flow-col lg:auto-cols-max">
                        <FooterText>Copyright © {new Date().getFullYear()} Liwen Duan</FooterText>
                        <FooterLink LinkTo="http://beian.miit.gov.cn/">{data.site.siteMetadata.ICPlicense}</FooterLink>
                        <FooterLink LinkTo={data.site.siteMetadata.PSBeianURL}>{data.site.siteMetadata.PSBeian}</FooterLink>                      
                    </div>
                    {/* <FooterLink LinkTo="/">
                        <div className="flex space-x-2 h-auto px-8 py-2 justify-center lg:justify-start">
                            <div className="h-8 w-8 object-cover">
                                <StaticImage 
                                    src="../../images/lwd-stamp.png"
                                    alt="Liwen Duan's Logo"
                                    placeholder="blurred"
                                />
                            </div>
                            <span className="inline-flex py-1 text-lg font-serif text-black dark:text-gray-200 dark:text-opacity-80">{data.site.siteMetadata.title}</span>
                        </div>
                    </FooterLink>
                    
                     */}
                </footer>
            }
        />
    )
}

export default Footer