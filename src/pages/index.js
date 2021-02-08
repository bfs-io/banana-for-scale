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
            `web development`,
          ]}
        />
        <h1>
          Mahalo{" "}
          <span role="img" aria-label="hang ten emoji">
            🤙
          </span>
        </h1>
        <p>My name is Mike Hacker. I work as Application Developer & Automation Engineer and I develop education content for learning how to code at codealongstudio.com. Thanks for stopping by.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Read My Web Log</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
