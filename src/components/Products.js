import React, { PureComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { colorsList } from '../components/helpers/colorsList'
import { platePatterns } from '../components/helpers/platePatterns'
import { headPatterns } from '../components/helpers/headPatterns'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../stylesheets/products.css'

export default class Products extends PureComponent {
  _renderInCarousel = images => {
    return (
      <Carousel
        showStatus={false}
        showIndicators={false}
        className="products"
        infiniteLoop
      >
        {images.map(image => (
          <div>
            {image.img}
            <p className="legend">{image.alt}</p>
          </div>
        ))}
      </Carousel>
    )
  }

  render() {
    return (
      <div className="content__wrapper">
        <h2 className="content__title">Nasza oferta</h2>
        <h3>Wykończenia</h3>
        {this._renderInCarousel(platePatterns)}
        <h3>Tablice napisowe</h3>
        {this._renderInCarousel(headPatterns)}
        <h3>Dostępne kolory</h3>
        {this._renderInCarousel(colorsList)}
      </div>
    )
  }
}
