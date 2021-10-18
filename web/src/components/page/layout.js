import React, { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import Maintainence from '../maintainence'
import {Helmet} from 'react-helmet'

const Layout = ({pageType, pageTitle=pageType, children}) => {

  //Fetch MaintainenceStatus
  const [maintainenceMode, setmaintainenceMode] = useState(false)
  useEffect(() => {
    fetch(`${process.env.GATSBY_STRAPI_API_URL}/maintainence-mode?_limit=1000&_locale=en`).then(response => response.json()).then(resultData => {
      setmaintainenceMode(resultData.maintainenceModeSwitch)
    })
  },[])

  if (maintainenceMode) {
    return (
      <Maintainence />
    )
  }

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