import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Realizations from '../components/realizations'
import HowTo from '../components/howTo'
import { colors } from '../components/helpers/colorsList'
import { platePatterns } from '../components/helpers/platePatterns'
import { headPatterns } from '../components/helpers/headPatterns'
import { realizationsList } from '../components/helpers/realizationsList'

import '../stylesheets/subpages.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Nagrobki" />
    <div className="field__wrapper">
      <HowTo />
      <Realizations />
      <h2 className="content__title">Nagrobki</h2>
      <p>Tu będzie wklejony tekst.</p>
      {realizationsList.map(color => color.img)}
    </div>
  </Layout>
)

export default SecondPage
