import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Banana For Scale"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `mike hacker`,
            `javascript`,
            `react`,
            "web development",
          ]}
        />
        <img style={{ margin: 0 }} src="./banana.jpg" alt="Gatsby Scene" />
        <h1>
          Mahalo{" "}
          <span role="img" aria-label="hang ten emoji">
            🤙
          </span>
        </h1>
        <p>Welcome to my web log, hosted by Mike Hacker.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Read Weblog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
