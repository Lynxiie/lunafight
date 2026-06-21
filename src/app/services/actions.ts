import {Service, signal} from '@angular/core';
import {AttackModel} from '../model/actions';

@Service()
export class Actions {

  attackModel = signal<AttackModel>({
    atk: 0,
    atkCran: 0,
    atkSpe: 0,
    atkSpeCran: 0,
    def: 0,
    defCran: 0,
    defSpe: 0,
    defSpeCran: 0,
    esq: 0,
    level: 0,
    pokemonSpecies: '',
    prec: 0,
    pvActual: 0,
    pvMax: 0,
    spriteUrl: '',
    vit: 0,
    vitCran: 0,
  });
  /*

  attackModels : { [key]: string, [value]: signal<AttackModel> }

  getAttackModel(type: 'player' | 'adversaire', index: number) {
    if (`${type}_${index}` in this.attackModels) {
      return...
    }

    this.attackModels[`${type}_${index}`] = signal<AttackModel>({
    ...
    });
  }

  getAllAttacksModels: signal<AttackModel>[] {
    return this.attackModel.values();
  }

  getAllPlayerAttacks: signal<AttackModel>[] {
    return this.attackModel
    filter(...) // que celles du player
    .values();
  }
   */
}
