import React from 'react'
import Layout from '../components/page/layout'
import Seo from "../components/seo"
import {ShowcaseCard} from '../components/card'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { MarkdownArticle } from '../components/article'

const TosPage = ({data, location}) => {
    const {pageTitle, Content, CoverImage, Excerpt, RelatedPage} = data.strapiPages
    return (
        <Layout pageTitle={pageTitle} pageType="Article" location={location}>
            <Seo title={pageTitle} description={Excerpt} image={CoverImage && `${process.env.GATSBY_STRAPI_API_URL}${CoverImage.url}`} pathname={location.pathname} />

            <div className="p-4 md:p-8 text-center grid grid-rows-auto grid-cols-1 m-8 md:grid-cols-2 xl:mx-48 md:my-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <h1 className={`text-2xl sm:text-3xl lg:text-5xl font-extrabold self-end lg:leading-tight ${!CoverImage && `col-span-2`}`}>{pageTitle}</h1>
                {
                    CoverImage && 
                    <GatsbyImage 
                        alt={CoverImage.alternativeText}
                        image={CoverImage.localFile.childImageSharp.gatsbyImageData}
                        className="row-span-2 m-2 md:m-4 md:ml-8 rounded-lg shadow-lg"
                    />
                }
                <p className={`italic ${!CoverImage && `col-span-2`}`}>{Excerpt}</p>
            </div>

            <div className="container mx-auto p-8 sm:p-16 bg-white lg:rounded-md dark:bg-gray-800 my-0">
              <MarkdownArticle article={Content}  className="markdown-article"/>
            </div>

            {
              RelatedPage[0] && 
              <div className='container mx-auto my-8'>
                <div className='lg:mx-10'>
                  <h2 className='text-lg font-bold pb-4'>More to read</h2>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                      RelatedPage.map((showcaseArticle) => {
                        return (
                          <ShowcaseCard article={showcaseArticle}/>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
            }
        </Layout>
    )
}

export default TosPage

export const query = graphql`
query getGeneraticPageContent($id: String!) {
  strapiPages(id: {eq: $id}) {
    pageTitle
    id
    Content
    CoverImage {
      url
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
        }
      }
      alternativeText
    }
    Excerpt
    RelatedPage {
      CoverImage {
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      Excerpt
      id
      pageSlug
      pageTitle
    }
  }
}
`