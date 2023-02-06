/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/models';
import { pokeApiRepo } from '../../services/poke.api.repo';
import { Card } from '../card/card';
import { Component } from '../component/component';
export class PokeResults extends Component {
  public pokemon: PokemonStructure[];
  constructor(public selector: string, public repo: pokeApiRepo) {
    super();
    this.pokemon = [];
    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    this.pokemon = await this.repo.getAllPokes();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemon.forEach((poke: PokemonStructure) => {
      new Card('.main', poke);
    });
  }

  createTemplate() {
    return `
      <img src='../../pokemon-logo.svg'/>
    `;
  }
}
