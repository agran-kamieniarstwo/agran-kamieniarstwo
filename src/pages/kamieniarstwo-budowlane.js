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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            delectus voluptas nesciunt quod adipisci ad. Ab, unde recusandae?
            Tenetur, in eos minus saepe commodi vero nulla itaque corporis est
            ab? Ex in necessitatibus commodi doloremque eveniet atque placeat
            consequuntur deleniti possimus, libero, ducimus iste sequi officia
            eum quas dolores quidem eius excepturi repellat voluptate quod
            mollitia at. Quasi, reprehenderit a. Eum odit nihil fuga earum
            numquam consequatur dignissimos quos officia, placeat omnis
            temporibus suscipit asperiores modi ad aspernatur esse impedit
            provident, eligendi itaque enim. Consectetur iusto eaque animi alias
            illum. Itaque doloremque omnis mollitia voluptatum, asperiores qui
            ipsa quae nobis nemo dolorem at, fugiat ab inventore tempora
            voluptate provident! Impedit molestiae corrupti tempora eveniet esse
            harum molestias natus rem dolorum!
          </p>
          <ul>
            <li>corrupti tempora eveniet</li>
            <li>corrupti tempora eveniet</li>
            <li>corrupti tempora eveniet</li>
            <li>corrupti tempora eveniet</li>
          </ul>
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
