import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import '../stylesheets/footer.css'

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        Copyright © 2018 {<Link to="/">agran.com.pl</Link>}. All rights reserved
      </div>
    )
  }
}
