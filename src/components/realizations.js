import React, { PureComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { realizationsList } from '../components/helpers/realizationsList'

import '../stylesheets/fieldOfInterest.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default class Realizations extends PureComponent {
  render() {
    return (
      <div className="content__wrapper">
        <h2 className="content__title">Nasze realizacje</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis
          hic dolore alias totam eveniet quas natus perferendis numquam tempore
          itaque ducimus repudiandae quos, sint quo voluptate corrupti
          asperiores accusamus.
        </p>
        <Carousel
          showStatus={false}
          showIndicators={false}
          dynamicHeight
          infiniteLoop
        >
          {realizationsList.map(image => (
            <div style={{ maxHeight: '500px' }}>{image.img}</div>
          ))}
        </Carousel>
      </div>
    )
  }
}
