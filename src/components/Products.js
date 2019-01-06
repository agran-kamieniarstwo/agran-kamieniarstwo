import React, { PureComponent } from 'react'

import { colorsList } from '../components/helpers/colorsList'
import { platePatterns } from '../components/helpers/platePatterns'
import { headPatterns } from '../components/helpers/headPatterns'

export default class Products extends PureComponent {
  render() {
    return (
      <div className="content__wrapper">
        <h2 className="content__title">Nasza oferta</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eaque
          dolorem quam, earum reiciendis a recusandae sit officiis. Voluptate,
          porro rerum eaque voluptas quas corrupti laudantium beatae nemo labore
          vel?
        </p>
        <h3>Płyty</h3>
        {platePatterns.map(color => color.img)}
        <h3>Tablice napisowe</h3>
        {headPatterns.map(color => color.img)}
        <h3>Dostępne kolory</h3>
        {colorsList.map(color => color.img)}
      </div>
    )
  }
}
