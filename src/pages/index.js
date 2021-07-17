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
        <p>Welcome to my web log titled Banana For Scale where I blog about software related subjects. A little about me; I work as Application Developer & Automation Engineer and I develop education content for learning how to code at codealongstudio.com. Thanks for stopping by!</p>
        <br></br>
        <p>To get on my calendar, <a href="https://calendly.com/mikehacker">click here.</a></p>
        <Link to="/blog/">
          <Button marginTop="35px">Read My Web Log</Button>
        </Link>
        <h1>Current shirt inventory</h1>
        <img src="https://res.cloudinary.com/desertsofcacti/image/upload/c_scale,w_800/v1626548730/mars-is-closer-than-you-think_v1vsjb.png"/>
        <a href="https://www.bonfire.com/mars-is-closer-than-you-think/"
          <Button marginTop="35px">Purchase the Mars Tee</Button>
        </a>
      </Layout>
    )
  }
}

export default IndexPage