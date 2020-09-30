import React from "react"
// import { Link } from "gatsby"
import Main from "./home/main"
import Articles from "./home/articles"
import "../styles/global.css"

import Layout from "../components/layout"


const IndexPage = () => (
    <Layout>
      <Main />
      <Articles />
      {/* Home Components:
           Main Logo
          1. Articles
          2. About Section - p + Youtube
          3. Flight Finder Widget
          4. Volunteer  */}


      {/* //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
)

export default IndexPage
