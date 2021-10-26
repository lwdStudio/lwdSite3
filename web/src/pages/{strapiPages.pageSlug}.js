import React from 'react'
import Layout from '../components/page/layout'
import SEO from "../components/seo"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Reactmarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import slug from 'rehype-slug'

const TosPage = ({data, location}) => {
    const {pageTitle, Content, CoverImage, Excerpt} = data.strapiPages
    return (
        <Layout pageTitle={pageTitle} pageType="Article" location={location}>
            <SEO title={pageTitle} description={Excerpt} image={CoverImage && `${process.env.GATSBY_STRAPI_API_URL}${CoverImage.url}`} pathname={location.pathname} />
            <div className="pt-5 text-center grid grid-rows-auto grid-cols-1 m-8 md:grid-cols-2 md:mx-24 md:my-4">
                <h1 className={`text-3xl md:text-5xl font-extrabold self-end ${!CoverImage && `col-span-2`}`}>{pageTitle}</h1>
                {
                    CoverImage && 
                    <GatsbyImage 
                        image={CoverImage.localFile.childImageSharp.gatsbyImageData}
                        className="row-span-2 m-4 md:m-12 rounded-lg shadow-lg"
                    />
                }
                <p className={`italic ${!CoverImage && `col-span-2`}`}>{Excerpt}</p>
            </div>
            <hr className="mx-8 opacity-50 md:mx-24"/>
            <div className="container mx-auto">
                <Reactmarkdown 
                    children={Content} 
                    linkTarget="_black"
                    className="markdown-article"
                    transformImageUri={uri => 
                        uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[slug,rehypeRaw]}
                />
            </div>
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
            gatsbyImageData
          }
        }
      }
      Excerpt
    }
  }    
`