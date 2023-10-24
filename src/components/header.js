import * as React from "react"
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="container">
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <a href="/">
        <img src="https://kwench.spaces.nexudus.com/en/business/getlogo?h=192&amp;mode=pad" alt="KWENCH" height="72" />
      </a>
      <a href="https://www.clubkwench.com/" style={{textDecoration: 'none'}}> Back to Home</a>
    </div>
  </header>
)

export default Header
