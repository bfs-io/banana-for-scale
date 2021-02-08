import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Mike Hacker"

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
        <img style={{ margin: 0; width: 25%; height: auto; }} src="./mike_hacker.jpg" />
        <h1>
          Mahalo{" "}
          <span role="img" aria-label="hang ten emoji">
            🤙
          </span>
        </h1>
        <p>Hello, thanks for stopping by. I work as Application Developer & Automation Engineer and I develop education content for learning how to code at codealongstudio.com.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Read My Web Log</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
