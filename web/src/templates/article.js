import React from 'react'
import Layout from '../components/page/layout'
import Seo from "../components/seo"
import { ArticleCard } from '../components/card'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { MarkdownArticle } from '../components/article'

const TosPage = ({data, pageContext, location}) => {
    const { pageTitle, Content, CoverImage, Excerpt, RelatedPage, updated_at} = data.strapiPages

    return (
        <Layout pageTitle={pageTitle} pageType="Article">
            <Seo title={pageTitle} description={Excerpt} image={CoverImage} pathname={location.pathname} />

            <div className="p-4 md:p-8 text-center grid grid-rows-auto grid-cols-1 m-8 md:grid-cols-2 xl:mx-48 md:my-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg print:p-0 print:shadow-none">
              <h1 className={`text-2xl sm:text-3xl lg:text-5xl font-extrabold self-end lg:leading-tight ${!CoverImage && `col-span-2`} print:text-3xl`}>{pageTitle}</h1>
              {
                  CoverImage && 
                  <GatsbyImage 
                      alt={CoverImage.alternativeText}
                      image={CoverImage.localFile.childImageSharp.gatsbyImageData}
                      className="row-span-2 m-2 md:m-4 md:ml-8 rounded-lg shadow-lg"
                  />
              }
              <p className={`italic ${!CoverImage && `col-span-2`} print:text-sm print:text-gray-700`}>{Excerpt}</p>
              <span className="flex mx-auto text-center justify-center italic bg-gray-200 dark:bg-gray-700 px-4 py-1 rounded-full text-xs md:text-base">Last update on {updated_at}</span>
            </div>
            <div className="container mx-auto p-8 sm:p-16 bg-white lg:rounded-md dark:bg-gray-800 my-0 print:py-0">
              <MarkdownArticle article={Content}  className="markdown-article"/>
            </div>
            {
              RelatedPage[0] && 
              <div className='container mx-auto my-8 print:hidden'>
                <div className='lg:mx-10'>
                  <h2 className='text-lg font-bold pb-2 pl-5'>More to read</h2>
                    {
                      RelatedPage.map((showcaseArticle) => {
                        return (
                          <ArticleCard posts={showcaseArticle}/>
                        )
                      }
                    )}
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
    pageSlug
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
    updated_at(formatString: "YYYY-MM-DD")
  }
}

`