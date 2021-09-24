import * as React from 'react'
import Layout from '../components/page/layout'
import { LwdServiceCard } from '../components/card'
import {graphql} from 'gatsby'

const lwdServiceIndex = ({location, data}) => {
  return (
    <Layout pageType="lwdService" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">All lwdService</h1>
        <p className="pb-4">{data.allStrapiLwdService.nodes[0].pageDescription}</p>
        

        <div className="flex flex-wrap mx-1 justify-center">
          {
            data.allStrapiLwdService.nodes[0].servicesCard.map((service) => {
              return (
                <LwdServiceCard 
                  Service={service}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default lwdServiceIndex

export const query = graphql `
query getlwdService {
  allStrapiLwdService(filter: {locale: {eq: "en"}}) {
    nodes {
      servicesCard {
        serviceDescription
        serviceIcon {
          url
          alternativeText
        }
        serviceIsPoweredBy
        serviceIsPoweredByUrl
        serviceLink
        serviceName
      }
      pageDescription
    }
  }
}
`
