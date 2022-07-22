import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Banana for Scale"

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
        <img style={{ margin: 0 }} src="./banana.jpg" />
        <h1>
          Mahalo{" "}
          <span role="img" aria-label="hang ten emoji">
            🤙
          </span>
        </h1>
        <p>Welcome to Banana For Scale, an open-source web logging community discussing all things scaling such as software development, business development, personal development, community development, and individual passion projects. Thanks for stopping by!</p>
        <br></br>
        <a href="https://join.slack.com/t/bananaforscalehq/shared_invite/zt-1cs1g4or7-v3yNIxm9DSfA8QvhpGPpXw" target="_blank">
          <Button marginTop="35px">Join The Conversation on Slack</Button>
        </a>
        <a href="https://github.com/bananaforscales" target="_blank">
          <Button marginTop="35px">Join Our GitHub Org</Button>
        </a>
        <h1>We are sponsoring a fund-raising effort for the Foster for CS program</h1>
        <img src="https://res.cloudinary.com/desertsofcacti/image/upload/c_scale,w_800/v1658200195/learn-cs4foster-tee_ath9ge.png"/>
        <a href="https://www.bonfire.com/learn-8/" target="_blank">
          <Button marginTop="35px">Sponser CS for Foster</Button>
        </a>
      </Layout>
    )
  }
}

export default IndexPage