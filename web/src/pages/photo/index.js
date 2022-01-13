import React, { useState, useEffect} from 'react'
import Layout from '../../components/page/layout'
import Seo from '../../components/seo'
import { LwdLink } from '../../components/page/link'
import {GatsbyImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'

const ImageIndexPage = ({location, data}) => {
    
    // https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/

    // Array of all news articles
    const allImages = data.allStrapiPhotoGallery.nodes

    // State for the list
    const [list, setList] = useState([...allImages.slice(0,10)])

    // State to trigger and more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allImages.length > 10)

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more articles
    useEffect(() => {
        if (loadMore && hasMore) {
            const currentLength = list.length
            const isMore = currentLength < allImages.length
            const nextResults = isMore 
            ? allImages.slice(currentLength, currentLength + 10)
            : []
            setList([...list, ...nextResults])
            setLoadMore(false)
        }
    }, [loadMore, hasMore])

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < allImages.length
        setHasMore(isMore)
    }, [list])
    
    
    
    return (
        <Layout pageTitle="All Images" pageType="Photo" location={location}>
            <Seo title="All Images" pathName={location.pathName} /> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                {
                    list.map((image) => {
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
            <div className="flex justify-center items-center py-4">
            {hasMore ? (
                <button onClick={handleLoadMore} className={`text-white dark:text-white place-self-center w-48 p-3 my-3 text-center rounded-md shadow-md shadow-blue-600/50 font-medium  bg-blue-600 hover:bg-yellow-300 hover:shadow-yellow-300 hover:text-black dark:hover:bg-yellow-300 dark:hover:shadow-yellow-300 dark:hover:text-black transition focus:shadow-none`}>Load More</button>
            ) : (
                <p className="italic font-serif text-gray-600 dark:text-gray-400">- The end -</p>
            )}
            </div>
            
        </Layout>
    )
}

export default ImageIndexPage

export const query = graphql `
query getAllImage {
    allStrapiPhotoGallery(sort: {order: DESC, fields: created_at}) {
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