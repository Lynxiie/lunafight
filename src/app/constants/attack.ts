import {PokemonType} from './enum';

export interface Attack {
  name: string;
  type: string;
  needTarget: boolean;
}

export const ATTACKS: readonly Attack[] = [
  {
    name: 'Charge',
    type: PokemonType.Normal,
    needTarget: true
  },
  {
    name: 'Mimi-queue',
    type: PokemonType.Normal,
    needTarget: true
  },
  {
    name: 'Repos',
    type: PokemonType.Normal,
    needTarget: false
  },
  {
    name: 'Picpic',
    type: PokemonType.Flying,
    needTarget: false
  },
] as const;
