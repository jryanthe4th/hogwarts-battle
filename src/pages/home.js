import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = () => (
  <Layout>
    <SEO title="Homepage" />
    <h1>Hi from the home page</h1>
    <Link to="/">Go back to the index page</Link>
  </Layout>
)

export default HomePage
