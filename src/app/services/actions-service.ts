import {Injectable, Service, signal, WritableSignal} from '@angular/core';
import {AttackModel} from '../model/actions';

//@Service()
@Injectable({
  providedIn: 'root',
})
export class ActionsService {

  attackModel = signal<AttackModel>({
    alterationPerma: null,
    altertationTempo: [],
    atk: null,
    atkSpe: null,
    atkSpeStage: "0",
    atkStage: "0",
    attackName: '',
    def: null,
    defSpe: null,
    defSpeStage: "0",
    defStage: "0",
    esq: "0",
    level: null,
    pokemonSpecies: '',
    prec: '0',
    pvActual: null,
    pvMax: null,
    spriteUrl: '',
    target: null,
    turnDamage: [],
    vit: null,
    vitStage: '0'
  });

  attackModels: {[key: string]: WritableSignal<AttackModel>} = {};

  getAttackModel(type: 'player' | 'foe', index: number) {

    console.log(`key: ${type}_${index}`)

    const key = `${type}_${index}`;
    if (key in this.attackModels) {
      return this.attackModels[key]
    }

    const attackModelSignal = signal<AttackModel>({
      alterationPerma: null,
      altertationTempo: [],
      atk: null,
      atkSpe: null,
      atkSpeStage: "0",
      atkStage: "0",
      attackName: '',
      def: null,
      defSpe: null,
      defSpeStage: "0",
      defStage: "0",
      esq: "0",
      level: null,
      pokemonSpecies: '',
      prec: '0',
      pvActual: null,
      pvMax: null,
      spriteUrl: '',
      target: null,
      turnDamage: [],
      vit: null,
      vitStage: '0'
    });

    this.attackModels[key] = attackModelSignal;
    return attackModelSignal;
  }

  getAllPlayerActions() {
    console.log(this.attackModels)
    return this.getAllActions('player');
  }

  getAllFoeActions() {
    return this.getAllActions('foe');
  }

  private getAllActions(type: 'player' | 'foe') {
    return Object.keys(this.attackModels).filter((key) => key.includes(type)).map(key => this.attackModels[key]());
  }
}
