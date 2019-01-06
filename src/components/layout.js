import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import '../stylesheets/layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
