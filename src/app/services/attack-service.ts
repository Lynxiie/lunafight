import { Injectable } from '@angular/core';
import {POKEMONS} from '../constants/pokemon';
import {ATTACKS} from '../constants/attack';

@Injectable({
  providedIn: 'root'
})
export class AttackService {

  getAllNames(): readonly string[] {
    return ATTACKS.map(attack => attack.name);
  }

}
