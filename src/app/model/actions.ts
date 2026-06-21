export interface AttackModel {
  pokemonSpecies: string;
  spriteUrl: string;
  level: number | null;
  pvActual: number | null;
  pvMax: number | null;
  atk: number | null;
  atkStage: string;
  def: number | null;
  defStage: string;
  atkSpe: number | null;
  atkSpeStage: string;
  defSpe: number | null;
  defSpeStage: string;
  vit: number | null;
  vitStage: string;
  prec: string  ;
  esq: string;

  alterationPerma: string | null;
  altertationTempo: string[];
  turnDamage: string[];
  attackName: string;
  target: string | null;
}

export interface Switch {

}

export interface Object {

}
