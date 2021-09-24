import React from 'react'
import { LwdLink } from './link'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'

export const FooterText = ({children}) => {
    return (
        <div className="px-5 py-1 md:py-0">
            <p className="flex text-gray-500 justify-center lg:justify-start">{children}</p>
        </div>
        
    )
}
export const FooterLink = ({LinkTo, children},props) => {
    return (
        <FooterText><LwdLink LinkTo={LinkTo} className="px-1.5 rounded-md" >{children}</LwdLink></FooterText>
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
                <footer className="p-1 bg-gray-100 shadow-sm rounded-lg z-50" >
                    <FooterLink LinkTo="https://github.com/lwdStudio/lwd-site/tree/gatsby">
                        <div className="flex space-x-2 h-auto px-8 py-2 justify-center lg:justify-start">
                            <StaticImage 
                            src="../../images/lwd-stamp.png"
                            alt="Liwen Duan's Logo"
                            placeholder="blurred"
                            layout="constrained"
                            width={35}
                            height={35}
                            transformOptions={{fit: "cover"}}
                            />
                            <span className="inline-flex py-1 text-lg font-serif text-black">{data.site.siteMetadata.title}</span>
                        </div>
                    </FooterLink>
                    
                    <div className="grid grid-flow-row auto-rows-max lg:grid-flow-col lg:auto-cols-max p-5">
                        <FooterText>Copyright © {new Date().getFullYear()} Liwen Duan</FooterText>
                        <FooterLink LinkTo="/tos">Legal Terms</FooterLink>
                        <FooterLink LinkTo="http://beian.miit.gov.cn/">{data.site.siteMetadata.ICPlicense}</FooterLink>
                        <FooterLink LinkTo={data.site.siteMetadata.PSBeianURL}>{data.site.siteMetadata.PSBeian}</FooterLink>                      
                    </div>
                </footer>
            }
        />
    )
}

export default Footer