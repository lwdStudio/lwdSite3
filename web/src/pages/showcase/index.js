import * as React from 'react'
import Layout from '../../components/page/layout'
import { PortfolioCard } from '../../components/card'
import { graphql } from 'gatsby'

const BlogIndexPage = ({location, data}) => {
  return (
    <Layout pageTitle="Showcase my work" pageType="Showcase" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">Showcase my work</h1>
        <p className="pb-4">Here are some work sample of my previous project.</p>
        {
          data.allStrapiPages.nodes.map((Posts) => {
            return (<PortfolioCard posts={Posts}/>)
          })
        }
      </div>
    </Layout>
  )
}

export default BlogIndexPage

export const query = graphql`
query getPortfolioPages {
    allStrapiPages(filter: {content_type: {typeSlug: {eq: "portfolio"}}}) {
      nodes {
        pageSlug
        pageTitle
        Excerpt
        tags {
          tagName
        }
        CoverImage {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }  
`