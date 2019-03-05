import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" lang="pl" />
    <h1>STRONA NIE ZOSTALA ODNALEZIONA</h1>
    <p>Strona o podanym adresie nie istnieje.</p>
  </Layout>
)

export default NotFoundPage
