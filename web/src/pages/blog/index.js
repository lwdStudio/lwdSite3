import * as React from 'react'
import Layout from '../../components/page/layout'
import { ArticleCard } from '../../components/card'
import { graphql } from 'gatsby'

const BlogIndexPage = ({location, data}) => {
  return (
    <Layout pageTitle="All Blogs" pageType="Blog" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">All Blogs</h1>
        <p className="pb-4">Here are some articles I wrote for many things. Some for coursework, some might be personal.</p>
        {
          data.allStrapiPages.nodes.map((Posts) => {
            return (<ArticleCard posts={Posts}/>)
          })
        }
      </div>
    </Layout>
  )
}

export default BlogIndexPage

export const query = graphql`
query getBlogPages {
  allStrapiPages(
    filter: {content_type: {locale: {eq: "en"}, typeSlug: {eq: "blog"}}}
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
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`