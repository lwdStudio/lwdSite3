import React from 'react'
import Layout from '../../components/page/layout'
import Seo from '../../components/seo'
import { LwdLink } from '../../components/page/link'
import {GatsbyImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

const ImageIndexPage = ({location, data}) => {
    const {nodes} = data.allStrapiPhotoGallery
    return (
        <Layout pageTitle="All Images" pageType="Photo" location={location}>
            <Seo title="All Images" pathName={location.pathName} /> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                {
                    nodes.map((image) => {
                        const {Image, Title, id, Slug} = image
                        function checkImageSize (height, width) {
                            if (parseInt(height) > parseInt(width)) {
                                return "row-span-2"
                            }
                            return " "
                        }
                        return (
                            <LwdLink LinkTo={`/photo/`+ Slug} className={`relative ${checkImageSize(Image.height, Image.width)} focus:border-4 focus:border-black dark:focus:border-yellow-300 p-0`} id={id}>
                                <div className="object-cover h-full rounded-t-sm">
                                    <GatsbyImage 
                                        image={Image.localFile.childImageSharp.gatsbyImageData}
                                        alt={Title}
                                        className="object-cover h-full rounded-t-sm"
                                    />
                                </div>
                                <span className="text-sm font-sans px-2 w-full absolute bottom-0 left-0 text-white bg-black bg-opacity-80 p-2 rounded-t-sm">{Title}</span>
                            </LwdLink>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default ImageIndexPage

export const query = graphql `
query getAllImage {
    allStrapiPhotoGallery {
      nodes {
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          height
          width
        }
        Title
        id
        Slug
      }
    }
  }
`