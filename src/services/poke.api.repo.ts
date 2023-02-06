/* eslint-disable no-debugger */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

import { PokemonStructure } from '../models/models';

export interface pokeApiRepoStructure {
  getAllPokes(): Promise<PokemonStructure[]>;
  getPokeById(id: ['id']): Promise<PokemonStructure>;
  updatePoke(name: Partial<PokemonStructure>): Promise<PokemonStructure>;
  deletePoke(name: ['name']): Promise<void>;
  addToFavorites(name: ['name']): Promise<void>;
}

export class pokeApiRepo {
  url: string;
  static getAllPokes: any;

  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAllPokes(): Promise<PokemonStructure[]> {
    const resp = await fetch(this.url);
    const data = await resp.json();
    const { results } = data;

    const pokePromise = results.map(async (item: any) => {
      const response = await fetch(item.url);
      const dataPokemon = await response.json();
      return dataPokemon;
    });
    const pokemonData = await Promise.all(pokePromise);
    const myPokes = pokemonData.map((details) => ({
      id: details.id,
      name: details.name,
      img: details.sprites.front_default,
      isFavorite: false,
    }));
    return myPokes;
  }

  async getPokeById(id: PokemonStructure['id']): Promise<PokemonStructure[]> {
    const resp = await fetch(this.url + '/' + id);
    const data = (await resp.json()) as [];
    return data;
  }

  async updatePoke(name: Partial<PokemonStructure>): Promise<PokemonStructure> {
    const resp = await fetch(this.url + '/' + name, {
      method: 'PATCH',
      body: JSON.stringify(name),
      headers: { 'content/type': 'application/json' },
    });
    const data = resp.json();
    return data;
  }

  async deletePoke(name: PokemonStructure['name']): Promise<void> {
    await fetch(this.url + '/' + name, {
      method: 'DELETE',
    });
  }

  async addToFavorites(name: ['name']): Promise<PokemonStructure> {
    const resp = await fetch(this.url + '/' + name);
    const data = await resp.json();
    return data;
  }
}
