import * as React from 'react'
import Layout from '../components/page/layout'

const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="Hi! My name is Liwen Duan." location={location}>
      <p className="h-screen">I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage