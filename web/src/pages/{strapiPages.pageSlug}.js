import React from 'react'
import Layout from '../components/page/layout'
import Seo from "../components/seo"
import {ShowcaseCard} from '../components/card'
import {LwdLink} from '../components/page/link'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Reactmarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import slug from 'rehype-slug'
import {PrismAsyncLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism/'

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

            <div className="container mx-auto p-10 bg-white lg:rounded-md dark:bg-gray-800 my-0">
              <Reactmarkdown 
                  children={Content} 
                  linkTarget="_black"
                  className="markdown-article"
                  transformImageUri={uri => 
                      uri.startsWith("http") ? uri : `${process.env.GATSBY_STRAPI_API_URL}${uri}`}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[slug,rehypeRaw]}
                  components={
                    {
                      code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={materialDark}
                            showLineNumbers={true}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      },
                      a ({node, className, children, ...props}) {
                        return (
                          <LwdLink LinkTo={props.href} className={className} {...props}>{children}</LwdLink>
                        )
                      }
                    }
                  }
              />
            </div>

            {
              RelatedPage[0] && 
              <div className='container mx-auto my-8'>
                <div className='lg:mx-10'>
                  <h2 className='text-lg font-bold'>More to read</h2>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                      RelatedPage.map((showcaseArticle) => {
                        return (
                          <ShowcaseCard article={showcaseArticle} />
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
          gatsbyImageData
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