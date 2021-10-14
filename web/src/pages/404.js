import * as React from "react"
import { Button } from "../components/button"
import {HomeIcon} from "@heroicons/react/outline"
import Layout from '../components/page/layout'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = ({location}) => {
  return (
    <Layout pageType="Not found (；′⌒`) " location={location}>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
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
