/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import { PokemonStructure } from '../../models/models';
import './card.style.scss';
export class Card extends Component {
  constructor(public selector: string, public pokemon: PokemonStructure) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }

  createTemplate() {
    return `
<ul>
    <li class='list'>
    <img src='${this.pokemon.img}' />
    <p> ${this.pokemon.name}</p>
    </li>
</ul>
    `;
  }
}
