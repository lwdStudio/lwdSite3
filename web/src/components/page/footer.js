import React from 'react'
import { LwdLink } from './link'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'
import { RenderToggles } from './toggles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
const footerTextColor = 'text-gray-900 dark:text-gray-200 font-medium'
const footerLinkStyle = `text-gray-600 dark:text-gray-300 p-1.5 rounded-md hover:bg-opacity-50 font-medium`

const FooterText = ({children}) => {
    return (
        <div className="py-1 px-4 lg:py-0">
            <p className={`flex ${footerTextColor} justify-center lg:justify-start m-0`}>{children}</p>
        </div>
        
    )
}
const FooterLink = ({LinkTo, className, children}) => {
    return (
        <FooterText><LwdLink id='footer' LinkTo={LinkTo} className={`${footerTextColor} px-1.5 rounded-md ${className}`} >{children}</LwdLink></FooterText>
    )
}
export const Footer = () => {
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
                <footer className="p-1 bg-white shadow-top rounded-xl z-50 dark:bg-gray-800 dark:text-gray-200 text-center md:text-left print:hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 mx-8 place-items-stretch">
                        <section className="pt-2">
                            <FooterLink LinkTo="/" className="text-black dark:text-gray-200 dark:focus:text-black">
                                <div className="flex space-x-2 h-auto px-8 py-2 justify-center md:justify-start ">
                                    <div className="h-8 w-8 object-cover">
                                        <StaticImage 
                                            src="../../images/lwd-stamp.png"
                                            alt="Liwen Duan's Logo"
                                            placeholder="blurred"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <span className="inline-flex py-1 text-lg font-serif font-medium">{data.site.siteMetadata.title}</span>
                                </div>
                            </FooterLink>
                            <div className="my-2">
                                <ul className="list-none pl-0 md:pl-10">
                                    <li><LwdLink className={footerLinkStyle} LinkTo="/tos">Legal Terms</LwdLink></li>
                                    <li><LwdLink className={footerLinkStyle} LinkTo="https://status.liwenduan.com">System Status</LwdLink></li>
                                    <li><LwdLink className={footerLinkStyle} LinkTo="https://github.com/lwdStudio/lwdSite3/">I made this website!</LwdLink></li>
                                </ul>
                            </div>

                        </section>
                        <section className="pt-2">
                            <h1 className={`${footerTextColor} font-extrabold text-lg md:text-2xl`}>Get in touch?</h1>
                            <span className='inline-block my-6'>Send an email to: <br /><LwdLink className={`${footerLinkStyle}`} LinkTo="mailto:hi@liwenduan.com">hi@liwenduan.com</LwdLink></span>
                        </section>
                        <section className="pt-2">
                            <h1 className={`${footerTextColor} font-extrabold text-lg md:text-2xl`}>Explore</h1>
                            <ul className="list-none pl-0">
                                <li><LwdLink className={footerLinkStyle} LinkTo="/blog">Blog</LwdLink></li>
                                <li><LwdLink className={footerLinkStyle} LinkTo="/showcase">Showcase</LwdLink></li>
                                <li><LwdLink className={footerLinkStyle} LinkTo="/lwd-service">lwdService</LwdLink></li>
                                <li><LwdLink className={footerLinkStyle} LinkTo="/about">About me</LwdLink></li>
                            </ul>
                        </section>
                    </div>
                    <hr className='m-8 mb-4 dark:opacity-40' />
                    <div className="grid grid-flow-row auto-rows-max px-8 pb-4 text-xs md:grid-flow-col md:auto-cols-max md:gap-2">
                        <span className={`${footerLinkStyle} font-light`}>Copyright © {new Date().getFullYear()} Liwen Duan</span>
                        <LwdLink className={`${footerLinkStyle} font-light`} LinkTo="http://beian.miit.gov.cn/">{data.site.siteMetadata.ICPlicense}</LwdLink>
                        <LwdLink className={`${footerLinkStyle} font-light`} LinkTo={data.site.siteMetadata.PSBeianURL}>{data.site.siteMetadata.PSBeian}</LwdLink>
                        <div className='flex gap-2' id='site-control'>
                            <a href='#nav' className='text-gray-600 dark:text-gray-300 p-1.5 rounded-full hover:bg-opacity-50 font-light hidden-text-companion' role='button' aria-label='Scroll to the Top'>
                                <FontAwesomeIcon icon={faCircleChevronUp} className='scale-150' />
                                <span className='pl-2 hidden-text'>Scroll to the Top</span>
                            </a>
                            <RenderToggles />
                        </div>
                    </div>
                </footer>
            }
        />
    )
}