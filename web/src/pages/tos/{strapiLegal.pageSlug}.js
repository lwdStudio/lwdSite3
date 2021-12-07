import React from 'react'
import Layout from '../../components/page/layout'
import { graphql } from 'gatsby'
import { MarkdownArticle } from '../../components/article'

const TosPage = ({data, location}) => {
    const {pageTitle,updated_at,content} = data.strapiLegal
    return (
        <Layout pageTitle={pageTitle} pageType="Legal" location={location}>
            <div className="pt-5 text-center ">
                <h1 className="text-3xl md:text-5xl font-extrabold py-2">{pageTitle}</h1>
                <p>Updated {updated_at}</p>
            </div>
            <div className="md:container md:mx-auto p-10 bg-white dark:bg-gray-800">
                <MarkdownArticle article={content} />
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