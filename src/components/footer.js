import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import '../stylesheets/footer.css'

export default class Footer extends PureComponent {
  render() {
    const year = new Date().getFullYear()
    return (
      <div className="footer">
        Copyright © {year} {<Link to="/">agran.com.pl</Link>}.
        All&nbsp;rights&nbsp;reserved.
      </div>
    )
  }
}
