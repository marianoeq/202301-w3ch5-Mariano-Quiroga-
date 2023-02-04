// Create an interface to define the methods of the api
// - READ => (getAll())=> from remote api // getByID()=>from local ✅
// - UPDATE => to modify some data from my favorites[local api]
// - DELETE => to delete a poke from favorites [local api]
// - CREATE => to add favorites to my [local api]

export interface pokeRepository {
  getAllPokes(): Promise<PokemonStructure[]>;
  getPokeById(name: PokemonStructure['name']): Promise<PokemonStructure>;
  updatePoke(name: PokemonStructure['name']): Promise<PokemonStructure>;
  deletePoke(name: PokemonStructure['name']): Promise<void>;
  addToFavorites(name: PokemonStructure['name']): Promise<void>;
}
