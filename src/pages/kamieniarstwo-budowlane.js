import React from 'react'
import { Link } from 'gatsby'

import schody from '../images/schody.jpg'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../stylesheets/kamieniarstwo-budowlane.css'
import '../stylesheets/fieldOfInterest.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Kamieniarsto budowlane" />
    <div className="field__wrapper">
      <h2 className="field__title">Kamieniarstwo Budowlane</h2>
      <div className="field-content">
        <div className="text-content">
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
          <p>
            Zapraszamy do <Link to="/kontakt">kontaktu</Link>.
          </p>
        </div>
        <div className="image-wrapper">
          <img src={schody} alt="granitowe schody" />
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
