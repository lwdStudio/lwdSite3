import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {Helmet} from 'react-helmet'
import { LwdLink } from '../../components/page/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import Seo from '../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const ImagePage = ({data}) => {
    const {Image, Title} = data.strapiPhotoGallery

    // show and hide
    const [hideUi, setHideUi] = useState(false)

    // function checkImageOrientation(image){
    //     if (image.width >= image.height) {
    //         if (window.screen.width >= window.screen.height) {
    //             return "h-screen"
    //         }
    //         return "w-screen"
    //     }
    //     if (image.width < image.height) {
    //         if (window.screen.width < window.screen.height) {
    //             return "w-screen"
    //         }
    //         return "h-screen"
    //     }
    // }
    return (
        <div className="bg-black h-screen w-screen relative flex justify-center items-center object-scale-down" >
            <Seo title={`${Title} | lwdSite Photo`} />
            <Helmet defer={false}>
                <title>{Title} - Photo</title>
            </Helmet>
            <LwdLink LinkTo="/photo" className="absolute top-5 left-5 z-10 w-12 h-12 bg-black bg-opacity-80 rounded-full p-4 text-white flex items-center justify-center" >
                <FontAwesomeIcon icon={faArrowLeft} className="self-center scale-125"/>
            </LwdLink>
            <button 
            onClick={() => setHideUi(!hideUi)} 
            className={`absolute top-5 right-5 z-10 w-12 h-12 bg-black bg-opacity-80 rounded-full p-4 text-white flex items-center justify-center transform transition link-common ${hideUi ? '-rotate-45 hover:rotate-0' : 'rotate-0 hover:-rotate-45' }`} 
            title={`${hideUi ? 'Open' : 'Close' } UI`} 
            aria-label={`${hideUi ? 'Open' : 'Close' } UI`}>
                <FontAwesomeIcon icon={faTimes} className="self-center scale-125"/>
            </button>
            <div className={`z-0`}>
                <img
                    src={`${process.env.GATSBY_STRAPI_API_URL}${Image.url}`}
                    alt={Title}
                    className="h-screen w-screen object-contain overflow-scroll"
                    loading="lazy"
                />
            </div>

            <div className={`${hideUi ? 'hidden' : 'grid' } grid-cols-2 md:grid-cols-3 justify-items-center items-center absolute transform transition bottom-0 z-10 w-screen bg-black bg-opacity-80 rounded-t-md text-white py-4 px-2 text-center `} id="ui">
                <div className="flex space-x-2 h-auto px-8 py-2 justify-center md:justify-start ">
                    <div className="h-8 w-8 object-cover ">
                        <StaticImage 
                            src="../../images/lwd-stamp.png"
                            alt="Liwen Duan's Logo"
                            placeholder="blurred"
                            width={32}
                            height={32}
                        />
                    </div>
                    <span className="inline-flex py-1 text-lg font-serif font-medium">lwdSite</span>
                </div>
                <span>{Title}</span>
            </div>
        </div>
    )
}

export default ImagePage

export const query = graphql `
query getImage($id: String!) {
    strapiPhotoGallery(id: {eq: $id}) {
      Title
      Image {
        height
        width
        url
      }
    }
  }   
`