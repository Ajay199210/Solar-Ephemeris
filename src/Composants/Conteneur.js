import React, { Component } from 'react';
import Carte from './Carte';

export class Conteneur extends Component {
    render() {
        return (
            <div id="conteneur">
                {
                    this.props.villes.map((ville, index) => {
                        return (
                            <Carte key={index} ville={ville} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Conteneur;