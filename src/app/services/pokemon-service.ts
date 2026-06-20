import { Injectable } from '@angular/core';
import {POKEMONS} from '../constants/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getAllNames(): readonly string[] {
    return POKEMONS.map(pokemon => pokemon.name);
  }
}
