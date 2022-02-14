import React, { useState, useEffect } from 'react'
import {Header} from './header'
import {Footer} from './footer'
import {Maintainence} from '../maintainence'
import { ClientOnly } from '../utility'
import {Helmet} from 'react-helmet'

const Layout = ({pageType, pageTitle=pageType, children, className}) => {

  //Fetch MaintainenceStatus
  const [maintainenceMode, setmaintainenceMode] = useState(false)
  useEffect(() => {
    async function fetchMaintainence() {
      let response = await fetch(`${process.env.GATSBY_STRAPI_API_URL}/maintainence-mode?_limit=1000&_locale=en`)
      response = await response.json()
      setmaintainenceMode(response.maintainenceModeSwitch)
    }
    fetchMaintainence()
  },[])

  if (maintainenceMode) {
    return (
      <ClientOnly>
        <Maintainence />
      </ClientOnly>
    )
  }

  return (
    <div className={`dark:bg-gray-900 bg-gray-100 ${className}`}>
      <Helmet defer={false}>
        <title>{pageTitle} | lwdSite</title>
      </Helmet>
      <Header pageName={pageType} />
      <main className="dark:text-white dark:text-opacity-70 dark:print:text-black focus:border-none" id='main-content' tabIndex="-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout