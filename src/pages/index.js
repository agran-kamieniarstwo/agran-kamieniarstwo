import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FieldOfInterest from '../components/fieldOfInterest'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h2>Hi people</h2> */}
    <div className="fields__wrapper">
      <FieldOfInterest name="nagrobki" link="/nagrobki" nagrobek />
      <FieldOfInterest
        schody
        name="Kamieniarstwo Budowlane"
        link="/kamieniarstwo-budowlane"
      />
    </div>
  </Layout>
)

export default IndexPage
