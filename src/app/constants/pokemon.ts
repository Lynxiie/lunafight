import {PokemonType} from './enum';

export interface Pokemon {
  name: string;
  types: string[];
}

export const POKEMONS: readonly Pokemon[] = [
  { name: 'Bulbizarre', types: [PokemonType.Grass, PokemonType.Poison] },
  { name: 'Herbizarre', types: [PokemonType.Grass, PokemonType.Poison] },
  { name: 'Florizarre', types: [PokemonType.Grass, PokemonType.Poison] },
  { name: 'Salamèche', types: [PokemonType.Fire] },
  { name: 'Reptincel', types: [PokemonType.Fire] },
  { name: 'Dracaufeu', types: [PokemonType.Fire, PokemonType.Flying] },
  { name: 'Carapuce', types: [PokemonType.Water] },
  { name: 'Carabaffe', types: [PokemonType.Water] },
  { name: 'Tortank', types: [PokemonType.Water] },
] as const;
