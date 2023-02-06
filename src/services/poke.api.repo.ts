/* eslint-disable no-unused-vars */
// Create an interface to define the methods of the api
// - READ => (getAll())=> from remote api // getByID()=>from local ✅
// - UPDATE => to modify some data from my favorites[local api]
// - DELETE => to delete a poke from favorites [local api]
// - CREATE => to add favorites to my [local api]

export interface pokeApiRepoStructure {
  getAllPokes(): Promise<PokemonStructure[]>;
  getPokeById(id: PokemonStructure['id']): Promise<PokemonStructure>;
  updatePoke(poke: Partial<PokemonStructure>): Promise<PokemonStructure>;
  deletePoke(name: PokemonStructure['name']): Promise<void>;
  addToFavorites(name: PokemonStructure['name']): Promise<void>;
}

export class pokeApiRepo {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async getAllPokes(): Promise<PokemonStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokemonStructure[];
    return data;
  }

  async getPokeById(id: PokemonStructure['id']): Promise<PokemonStructure> {
    const resp = await fetch(this.url + '/' + id);
    const data = (await resp.json()) as PokemonStructure;
    return data;
  }

  async updatePoke(
    poke: Partial<PokemonStructure>
  ): Promise<PokemonStructure[]> {
    const resp = await fetch(this.url + '/' + poke, {
      method: 'PATCH',
      body: JSON.stringify(poke),
      headers: { 'content/type': 'application/json' },
    });
    const data = resp.json();
    return data;
  }

  async deletePoke(name: PokemonStructure['name']) {
    const resp = await fetch(this.url + '/' + name, {
      method: 'DELETE',
    });
  }

  async addToFavorites(
    name: PokemonStructure['name']
  ): Promise<PokemonStructore> {
    const resp = await fetch(this.url + '/' + name);
    const data = await resp.json();
    return data;
  }
}
