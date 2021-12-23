import React from "react";
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'

export const SocialImage = ({node}) => {
    const {title, CoverImage} = node
    return (
        <div className="static grid grid-cols-2 h-[630px] w-[1200px] rounded-lg border-8 border-blue-400">
            <div className={`flex flex-col pl-4 bg-gradient-to-r from-white to-gray-50/50 ${!CoverImage && `col-span-2`}`}>
                <div className="flex p-4">
                    <StaticImage
                    src="../images/lwd-stamp.png"
                    alt="Liwen Duan's Logo"
                    layout="fixed"
                    width={50}
                    height={50} />
                    <span className="inline-flex p-3 text-2xl font-bold font-serif text-center">lwdSite</span>
                </div>

                <h1 className="pt-8 px-4 font-serif text-left text-[8vh] leading-tight">{title}</h1>
                <p className="font-sans pl-4 text-gray-500 font-light">by Liwen Duan</p>
            </div>
            { CoverImage && 
                <div className="p-0">
                    <GatsbyImage 
                        alt={CoverImage.alternativeText}
                        image={CoverImage.localFile.childImageSharp.gatsbyImageData}
                        className="object-cover h-full object-right"
                    />
                </div>
            }
        </div>
    )
}

export default SocialImage;
