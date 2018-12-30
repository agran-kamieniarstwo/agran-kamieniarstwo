import React, { PureComponent } from 'react'
import { Link } from 'gatsby'

import '../stylesheets/fieldOfInterest.css'

export default class Realizations extends PureComponent {
  static defaultProps = {
    name: 'hello',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam facere assumenda architecto officiis eligendi neque exercitationem, totam laudantium nesciunt? Ducimus optio laborum eligendi natus nihil, accusantium eum. Dolorem, ut.',
  }

  render() {
    const { name, desc, link } = this.props
    return (
      <div className="content__wrapper">
        <h2 className="content__title">Nasze realizacje</h2>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
