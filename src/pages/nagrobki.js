import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Realizations from '../components/realizations'
import Products from '../components/Products'

import '../stylesheets/kamieniarstwo-budowlane.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Nagrobki" />
    <div className="field__wrapper no-flex">
      <Products />
    </div>
    <div className="field__wrapper no-flex">
      <Realizations />
    </div>
  </Layout>
)

export default SecondPage
