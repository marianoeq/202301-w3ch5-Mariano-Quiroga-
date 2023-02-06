/* eslint-disable new-cap */
/* eslint-disable no-new */

import './index.scss';
import { PokeResults } from './components/pokeResults/pokeResults';
import { pokeApiRepo } from './services/poke.api.repo';

new PokeResults('body', new pokeApiRepo());
