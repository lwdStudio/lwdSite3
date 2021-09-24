import React from 'react'
import Layout from '../../components/page/layout'
import { graphql } from 'gatsby'
import Markdown from "react-markdown"

const TosPage = ({data, location}) => {
    const {pageTitle,updated_at,Content} = data.strapiPages
    return (
        <Layout pageTitle={pageTitle} pageType="Legal Terms" location={location}>
            <div className="pt-5 text-center">
                <h1 className="text-5xl font-extrabold py-2">{pageTitle}</h1>
                <p>Updated {updated_at}</p>
            </div>
            <div className="md:container md:mx-auto p-4">
                <Markdown children={Content}/>
            </div>
        </Layout>
    )
}

export default TosPage

export const query = graphql`
query getPageContent($id: String!) {
    strapiPages(id: {eq: $id}) {
      pageTitle
      updated_at(formatString: "YYYY-MM-DD")
      id
      Content
    }
  }  
`