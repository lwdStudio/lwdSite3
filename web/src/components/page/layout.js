import * as React from 'react'
import Header from './header'
import Footer from './footer'
import {Helmet} from 'react-helmet'

const Layout = ({pageType, pageTitle=pageType, location, children}) => {
  return (
    <div>
      <Helmet defer={false}>
        <title>{pageTitle} | lwdSite</title>
      </Helmet>
      <Header pageName={pageType} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout