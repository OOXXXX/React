import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hello world</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>

  </div>
)

export default IndexPage
