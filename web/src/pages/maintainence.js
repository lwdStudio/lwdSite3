import * as React from 'react'
import Footer from '../components/page/footer'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'


const maintainencePage = () => {
    return(
        <div>
            <Helmet defer={false}>
                <title>Coming back soon | lwdSite</title>
            </Helmet>
            <div className="h-screen container p-4 text-center">
                <div className="flex h-auto p-2 focus:ring-2 focus:ring-yellow-300 rounded-lg focus:text-black focus:bg-yellow-300">
                    <StaticImage
                        src="../images/lwd-stamp.png"
                        alt="Liwen Duan's Logo"
                        layout="fixed"
                        width={75}
                        height={75} />
                    <span className="inline-flex p-3 text-2xl font-serif">lwdSite</span>
                </div>
                <h1 className="p-10 text-3xl">Coming back soon</h1>
            </div>
            <Footer />
        </div>
    )
}

export default maintainencePage