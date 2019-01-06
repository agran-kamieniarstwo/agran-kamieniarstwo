import React, { PureComponent } from 'react'

import { realizationsList } from '../components/helpers/realizationsList'
import '../stylesheets/fieldOfInterest.css'

export default class Realizations extends PureComponent {
  static defaultProps = {
    name: 'hello',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam facere assumenda architecto officiis eligendi neque exercitationem, totam laudantium nesciunt? Ducimus optio laborum eligendi natus nihil, accusantium eum. Dolorem, ut.',
  }

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
        {realizationsList.map(color => color.img)}
      </div>
    )
  }
}
