import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { Schody } from '../components/schodyImage'
import { Nagrobek } from '../components/nagrobekImage'

import '../stylesheets/fieldOfInterest.css'

export default class FieldOfInterest extends PureComponent {
  static defaultProps = {
    name: 'hello',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam facere assumenda architecto officiis eligendi neque exercitationem, totam laudantium nesciunt? Ducimus optio laborum eligendi natus nihil, accusantium eum. Dolorem, ut.',
  }

  render() {
    const { name, desc, link, schody, nagrobek } = this.props
    return (
      <div className="field__wrapper">
        <h3 className="field__title">{name}</h3>
        <div className="field__desc">
          {nagrobek && <Nagrobek />}
          {schody && <Schody />}
          {desc}
        </div>
        <Link to={link}>
          <button className="field__button">Czytaj więcej...</button>
        </Link>
      </div>
    )
  }
}
