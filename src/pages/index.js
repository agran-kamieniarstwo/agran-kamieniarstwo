import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FieldOfInterest from '../components/fieldOfInterest'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="fields__wrapper">
      <FieldOfInterest
        name="nagrobki"
        link="/nagrobki"
        nagrobek
        desc="Posiadamy szeroką ofertę nagrobków oraz tablic napisowych w bogatej gamie kolorystycznej. Gwarantujemy
              profesjonalną obsługę oraz szybki czas realizacji zamówienia."
      />
      <FieldOfInterest
        desc="Posiadamy doświadczonych kamieniarzy specjalizujących się w obróbce i montau elementów z kamienia.
        Realizujemy zarówno proste, niewielkie zlecenia jak również wspołpracujemy przy dużych realizacjach."
        schody
        name="Kamieniarstwo Budowlane"
        link="/kamieniarstwo-budowlane"
      />
    </div>
  </Layout>
)

export default IndexPage
