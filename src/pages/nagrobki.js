import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Realizations from '../components/realizations'
import HowTo from '../components/howTo'
import Products from '../components/Products'

import '../stylesheets/subpages.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Nagrobki" />
    <div className="field__wrapper">
      <HowTo />
      <Products />
      <Realizations />
    </div>
  </Layout>
)

export default SecondPage
