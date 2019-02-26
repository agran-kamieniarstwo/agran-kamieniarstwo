import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../stylesheets/contact.css'
import '../stylesheets/fieldOfInterest.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Nagrobki" />
    <div className="field__wrapper">
      <h2 className="content__title">Kontakt</h2>
      <div className="contact__wrapper">
        <form className="contact__form" style={{ display: 'none' }}>
          <div>
            <label htmlFor="name">Imię</label>
            <input
              className="contact__input"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Adres email</label>
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="name">Telefon kontaktowy</label>
            <input className="contact__input" type="tel" name="tel" id="tel" />
          </div>
          <div>
            <label htmlFor="name">Wiadomość</label>
            <textarea
              className="contact__textarea"
              type="textarea"
              name="message"
              id="message"
              rows={6}
              required
            />
          </div>
          <button className="field__button">Wyślij wiadomość</button>
        </form>
        <div className="contact__info">
          {/* <h3>AGRAN Kamieniarstwo</h3> */}
          Elżbieta Wojciechowska
          <br />
          tel: <a href="tel:+48600726536">600 726 536</a>
          <br />
          ul.Harcerska 25
          <br />
          41-946 Piekary Śląskie
          <br />
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
