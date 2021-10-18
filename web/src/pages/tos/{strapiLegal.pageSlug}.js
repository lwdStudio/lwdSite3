import React from 'react'
import Layout from '../../components/page/layout'
import { graphql } from 'gatsby'
import Reactmarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import slug from 'rehype-slug'

const TosPage = ({data, location}) => {
    const {pageTitle,updated_at,content} = data.strapiLegal
    return (
        <Layout pageTitle={pageTitle} pageType="Legal Terms" location={location}>
            <div className="pt-5 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold py-2">{pageTitle}</h1>
                <p>Updated {updated_at}</p>
            </div>
            <div className="md:container md:mx-auto px-10">
                <Reactmarkdown 
                    children={content} 
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
query getLegalPageContent($id: String!) {
    strapiLegal(id: {eq: $id}) {
      updated_at(formatString: "YYYY-MM-DD")
      pageTitle
      content
    }
  }  
`