import React, { PureComponent, Fragment } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { realizationsList } from '../components/helpers/realizationsList'

import '../stylesheets/fieldOfInterest.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default class Realizations extends PureComponent {
  render() {
    return (
      <div className="content__wrapper realizations">
        <h2 className="content__title">Nasze realizacje</h2>
        <Carousel
          showStatus={false}
          showIndicators={false}
          dynamicWidth
          infiniteLoop
        >
          {realizationsList.map(image => (
            <Fragment>{image.img}</Fragment>
          ))}
        </Carousel>
      </div>
    )
  }
}
