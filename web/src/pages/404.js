import * as React from "react"
import { Button } from "../components/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/page/layout'

const NotFoundPage = ({location}) => {
  return (
    <Layout pageType="Not found (；′⌒`) " location={location}>
      <main className="p-16">
        <h1 className='mb-16'>Page not found</h1>
        <p className="pb-12">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code className="p-2 rounded-md bg-yellow-600 text-yellow-100">src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Button to="/"><FontAwesomeIcon icon={faHome} /> To Homepage</Button>
        </p>
      </main>

    </Layout>
  )
}

export default NotFoundPage
