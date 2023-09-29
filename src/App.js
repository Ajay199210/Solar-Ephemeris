import React, { Component } from 'react';
import { villes } from './Data';
import DropDownList from './Composants/DropDownList';
import Conteneur from './Composants/Conteneur';
import { jourAnnee } from './Modules/mecaniqueCeleste';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      titre : "Éphémérides",
      today : new Date(),
      ville : villes[0], // ville actuelle dans le dropdown
      villes: [] // villes présentes dans le conteneur
    }
  }
  
  // Calculer le numéro du jour de l'année (wrapper function)
  getNumeroJour() {
    return jourAnnee(
      this.state.today.getDate(),
      this.state.today.getMonth(), 
      this.state.today.getFullYear()
    );
  }

  // Changer la ville
  handleVilleChange(nomVille) {
    var villeChoisie = villes.find(v => v.nom === nomVille);
    // console.log(villeChoisie);
    this.setState({
      ville: villeChoisie
    });
  }
  
  // Traitement du click du bouton
  handleButtonClick() {
    let villes = this.state.villes;
    let villeActuel = this.state.ville;

    if(villes.indexOf(villeActuel) === -1)
    {
      villes.push(villeActuel);
      this.setState({
        villes: villes
      });
    }
    // console.log(this.state.villes);
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.titre}</h1>
        <h3>Jour {this.getNumeroJour()} de l'année {this.state.today.getFullYear()}</h3>
        <DropDownList options={villes} onOptionChange={this.handleVilleChange.bind(this)} />
        <button onClick={this.handleButtonClick.bind(this)}>Ajouter</button>
        <Conteneur villes={this.state.villes} />
      </div>
    );
  }
}

export default App;