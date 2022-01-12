import React from 'react'
import { graphql } from 'gatsby'
import {Helmet} from 'react-helmet'
import { LwdLink } from '../../components/page/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Seo from '../../components/seo'

const ImagePage = ({data}) => {
    const {Image, Title} = data.strapiPhotoGallery

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
            <LwdLink LinkTo="/photo" className="absolute top-5 left-5 z-10 w-12 h-12 bg-black bg-opacity-80 rounded-full p-4 text-white flex items-center justify-center" ><FontAwesomeIcon icon={faArrowLeft} className="self-center scale-125"/></LwdLink>
            <div className={`z-0`}>
                <img
                    src={`${process.env.GATSBY_STRAPI_API_URL}${Image.url}`}
                    alt={Title}
                    className="h-screen w-screen object-contain overflow-scroll"
                    loading="lazy"
                />
            </div>
            <span className="absolute bottom-0 z-10 w-screen bg-black bg-opacity-80 rounded-t-md text-white py-4 px-2 text-center">{Title}</span>
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