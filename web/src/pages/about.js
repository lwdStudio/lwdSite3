import * as React from 'react'
import Layout from '../components/page/layout'

const AboutPage = ({location}) => {
  return (
    <Layout pageType="About me" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">Hi, My name is Liwen Duan</h1>
      </div>
    </Layout>
  )
}

export default AboutPage