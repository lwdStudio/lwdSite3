import * as React from 'react'
import Layout from '../components/page/layout'
import Maintainence from '../components/maintainence'
import {graphql} from 'gatsby'

const IndexPage = ({location, data}) => {
  if (data.allStrapiFrontPage.edges[0].node.maintainenceMode) {
    return (
      <Maintainence />
    )
  }
  return (
    <Layout pageTitle="Hi! My name is Liwen Duan." location={location}>
      <p className="h-screen">I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql `
query MyQuery {
  allStrapiFrontPage {
    edges {
      node {
        maintainenceMode
      }
    }
  }
}
`