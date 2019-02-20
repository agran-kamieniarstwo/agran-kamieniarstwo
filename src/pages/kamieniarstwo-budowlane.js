import React from 'react'
import schody from '../images/schody.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../stylesheets/subpages.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Nagrobki" />
    <div className="field__wrapper">
      <h2 className="content__title">Kamieniarstwo Budowlane</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <p>
            Zajmujemy się kompleksową obróbką kamienia i&nbsp;produkcją
            elementów wykończeniowych. W naszym zakładzie korzystamy z wysokiej
            jakości produktów, a naszym klientom oferujemy bogatą ofertę kamieni
            w szerokiej gamie kolorów, grubości i faktur.
          </p>
          <p>Wykonujemy z kamienia między innymi:</p>
          <ul>
            <li>schody</li>
            <li>kominki</li>
            <li>blaty kuchenne</li>
            <li>parapety okienne</li>
            <li>posadzki</li>
            <li>oraz inne elementy budowlane</li>
          </ul>
          <p>Zapraszamy do kontaktu.</p>
        </div>
        <img
          src={schody}
          alt=""
          style={{ height: '100%', margin: '0 0 150px 30px' }}
        />
      </div>
    </div>
  </Layout>
)

export default SecondPage
