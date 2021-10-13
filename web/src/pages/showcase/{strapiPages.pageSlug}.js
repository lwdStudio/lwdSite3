import React from 'react'
import Layout from '../../components/page/layout'
import { graphql } from 'gatsby'
import Reactmarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import slug from 'rehype-slug'

const TosPage = ({data, location}) => {
    const {pageTitle,updated_at,Content} = data.strapiPages
    return (
        <Layout pageTitle={pageTitle} pageType="Showcase" location={location}>
            <div className="pt-5 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold py-2">{pageTitle}</h1>
            </div>
            <div className="md:container md:mx-auto px-10">
                <Reactmarkdown 
                    children={Content} 
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
query getPortfolioPageContent($id: String!) {
    strapiPages(id: {eq: $id}, content_type: {typeSlug: {eq: "portfolio"}}) {
      pageTitle
      id
      Content
    }
  }
`