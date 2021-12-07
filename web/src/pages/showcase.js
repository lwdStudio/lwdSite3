import React from 'react'
import Layout from '../components/page/layout'
import Seo from '../components/seo'
import { ShowcaseCard } from '../components/card'
import { graphql } from 'gatsby'

const pageTitle = "Showcase my work"

const BlogIndexPage = ({location, data}) => {
  return (
    <Layout pageTitle={pageTitle} pageType="Showcase" location={location}>
      <Seo title={pageTitle} pathname={location.pathname} />
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">{pageTitle}</h1>
        <p className="pb-4">Here are some work sample of my previous project.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 p-4">
        {
          data.allStrapiPages.nodes.map((showcaseArticle) => {
            return (
              <ShowcaseCard article={showcaseArticle} />
            )
          })
        }
        </div>

      </div>
    </Layout>
  )
}

export default BlogIndexPage

export const query = graphql`
query getPortfolioPages {
  allStrapiPages(
    filter: {content_type: {typeSlug: {eq: "portfolio"}}}
    sort: {fields: created_at, order: DESC}
    ) {
    nodes {
      pageSlug
      pageTitle
      Excerpt
      tags {
        tagName
      }
      CoverImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`