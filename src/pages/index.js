import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import schody from '../images/schody.jpg'
import nagrobek from '../images/nagrobek.jpg'

import '../stylesheets/fieldOfInterest.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Agran Kamieniarstwo"
      keywords={[
        `kamieniarstwo`,
        `kamieniarstwo budowlane`,
        `nagrobki`,
        `marmur`,
        `granit`,
        `śląsk`,
        `nagrobki Katowice`,
        `nagrobki Piekary śląskie`,
        `nagrobki Gliwice`,
        `nagrobki Chorzów`,
        `nagrobki Bytom`,
        `nagrobki Zabrze`,
      ]}
      lang="pl"
      description="Firma Agran działą na terenie całego śląska. Specjalizujemy się w kamieniarstwie nagrobkowym oraz kamieniarstwie budowlanym."
    />

    <div className="fields__wrapper">
      <div className="field__wrapper">
        <h2 className="field__title">nagrobki</h2>
        <div className="image-wrapper">
          <img src={nagrobek} alt="nagrobek" />
        </div>
        <p>
          Posiadamy szeroką ofertę nagrobków oraz tablic napisowych w bogatej
          gamie kolorystycznej. Gwarantujemy profesjonalną obsługę oraz szybki
          czas realizacji zamówienia.
        </p>
        <Link to="/nagrobki" className="field__button">
          Czytaj więcej...
        </Link>
      </div>

      <div className="field__wrapper">
        <h2 className="field__title">kamieniarstwo budowlane</h2>
        <div className="image-wrapper">
          <img src={schody} alt="granitowe schody" />
        </div>
        <p>
          Posiadamy doświadczonych kamieniarzy specjalizujących się w obróbce i
          montau elementów z kamienia. Realizujemy zarówno proste, niewielkie
          zlecenia jak również wspołpracujemy przy dużych realizacjach.
        </p>
        <Link to="/kamieniarstwo-budowlane" className="field__button">
          Czytaj więcej...
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
