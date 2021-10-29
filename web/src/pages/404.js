import * as React from "react"
import { Button } from "../components/button"
import {HomeIcon} from "@heroicons/react/outline"
import Layout from '../components/page/layout'

const NotFoundPage = ({location}) => {
  return (
    <Layout pageType="Not found (；′⌒`) " location={location}>
      <main className="p-24">
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
          <Button to="/">Go home<HomeIcon className="h-4 inline px-1 align-middle"/></Button>
        </p>
      </main>

    </Layout>
  )
}

export default NotFoundPage
