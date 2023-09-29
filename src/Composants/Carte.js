import React, { Component } from 'react';
import { coucher, lever, dureeJour, conversionDecJourHeure } from '../Modules/mecaniqueCeleste';

class Carte extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    ville : this.props.ville,
    today : new Date()
    }
  }

  render() {
    var v = this.props.ville;
    var today = this.state.today;

    return (
      <div className="carte">
        <h4 className="nomVille">{this.props.ville.nom}</h4>
        <ul>
          <li>
            {conversionDecJourHeure(lever(v.latitude, v.longitude, v.decalageHoraire,
               today.getDate(), today.getMonth(), today.getFullYear()))}
          </li>
          <li>
            {conversionDecJourHeure(coucher(v.latitude, v.longitude, v.decalageHoraire,
               today.getDate(), today.getMonth(), today.getFullYear()))}
          </li>
          <li>
            {(dureeJour(v.latitude, v.longitude, v.decalageHoraire, today.getDate(),
             today.getMonth(), today.getFullYear()))}
          </li>
        </ul>
      </div> 
    )
  }
}

export default Carte;