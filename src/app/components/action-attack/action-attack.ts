import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  signal,
  inject,
  input,
  effect,
  computed, OnInit
} from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {PokemonSelect} from "../pokemon-select/pokemon-select";
import {MatHint} from '@angular/material/form-field';
import {PokemonAttackSelect} from '../pokemon-attack/pokemon-attack-select';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelect} from '@angular/material/select';
import {StageInput} from '../stage-input/stage-input.component';
import {AttackModel} from '../../model/actions';
import {FieldTree, form, FormField, max, min, required, validate} from '@angular/forms/signals';
import {ActionsService} from '../../services/actions-service';
import {stage, url} from '../../helper/validation-helper';

@Component({
  selector: 'app-action-attack',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    PokemonSelect,
    MatFormField,
    PokemonAttackSelect,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
    ReactiveFormsModule,
    MatSelect,
    StageInput,
    FormField
  ],
  templateUrl: './action-attack.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './action-attack.scss'
})
export class ActionAttack {


  actionService = inject(ActionsService);


  index = input.required<number>();
  type = input.required<'player' | 'foe'>();

  @ViewChild('targetInput')
  input: ElementRef<HTMLInputElement> | undefined;
  targetName = new FormControl('');
  alterationPerma = new FormControl('');
  alterationVola = new FormControl('');
  degatTour = new FormControl('');

  options: string[] = [];

  alterationsPerma = [
    "Aucune",
    "Paralysie",
    "Gel",
    "Sommeil",
    "Se réveille ce tour",
  ];
  alterationsVola = [
    "Confusion",
    "Attraction",
  ];
  degatsTour = [
    "Poison",
    "Poison grave",
    "Brûlure",
    "Vampigraine",
    "Ligotage",
    "Etreinte",
    "Siphon",
    "Danse-flamme",
    "Tourbi-Sable",
    "Claquoir",
    "Harcèlement",
    "Troquenard",
    "Voltageôle",
    "Vortex Magma",
  ];
    // attackForm = form(this.actionService.getAttackModel(this.type(), this.index()));

    attackModel = computed(() =>
      this.actionService.getAttackModel(this.type(), this.index())
    );

    //let actionService = inject(ActionsService);



  attackForm = form(this.attackModel(), (schemaPath) => {
      required(schemaPath.pokemonSpecies, {message: "Le Pokémon est requis"})

      url(schemaPath.spriteUrl, {message: 'URL du sprite invalide'});

      required(schemaPath.level, {message: "Le niveau est requis"})
      min(schemaPath.level, 5, {message: "Le niveau doit être en 5 et 100"})
      max(schemaPath.level, 100, {message: "Le niveau doit être en 5 et 100"})

      required(schemaPath.pvActual, {message: "Les PV actuels sont requis"})
      min(schemaPath.pvActual, 1, {message: "Les PV actuels doivent être supérieurs à 1"})

      required(schemaPath.pvMax, {message: "Les PV max sont requis"})
      min(schemaPath.pvMax, 1, {message: "Les PV max doivent être supérieurs à 1"})

      required(schemaPath.atk, {message: "L'attaque est requise"})
      min(schemaPath.atk, 1, {message: "L'attaque doit être supérieure à 1"})

      required(schemaPath.atkStage, {message: "Le cran de l'attaque est requis"});
      stage(schemaPath.atkStage, {message: "Le cran de l'attaque doit être compris en -6 et 6"});

      required(schemaPath.def, {message: "La défense est requise"});
      min(schemaPath.def, 0, {message: "La défense doit être supérieure à 1"});

      required(schemaPath.defStage, {message: "Le cran de défense est requis"});
      stage(schemaPath.defStage, {message: "Le cran de la défense doit être compris en -6 et 6"});

      required(schemaPath.atkSpe, {message: "L'attaque spéciale est requise"});
      min(schemaPath.atkSpe, 0, {message: "L'attaque spéciale doit être supérieure à 1"});

      required(schemaPath.atkSpeStage, {message: "Le cran de l'attaque spéciale est requis"});
      stage(schemaPath.atkSpeStage, {message: "Le cran de l'attaque spéciale doit être compris en -6 et 6"});

      required(schemaPath.defSpe, {message: "La défense spéciale est requise"});
      min(schemaPath.defSpe, 0, {message: "La défense spéciale doit être supérieure à 1"});

      required(schemaPath.defSpeStage, {message: "Le cran de la défense spéciale est requis"});
      stage(schemaPath.defSpeStage, {message: "Le cran de la défense spéciale doit être compris en -6 et 6"});

      required(schemaPath.vit, {message: "La vitesse est requise"});
      min(schemaPath.vit, 0, {message: "La vitesse doit être supérieure à 1"});

      required(schemaPath.vitStage, {message: "Le cran de la vitesse est requis"});
      stage(schemaPath.vitStage, {message: "Le cran de la vitesse doit être compris en -6 et 6"});

      required(schemaPath.prec, {message: "Le cran de la précision est requis"});
      stage(schemaPath.prec, {message: "Le cran de la précision doit être compris en -6 et 6"});

      required(schemaPath.esq, {message: "Le cran de l'esquive est requis"});
      stage(schemaPath.esq, {message: "Le cran de l'esquive doit être compris en -6 et 6"});
    });


  // attackForm = computed(() => {
  //   const model = this.actionService.getAttackModel(this.type(), this.index());
  //   form(model, (schemaPath) => {
  //     required(schemaPath.pokemonSpecies, {message: "Le Pokémon est requis"})
  //
  //     url(schemaPath.spriteUrl, {message: 'URL du sprite invalide'});
  //
  //     required(schemaPath.level, {message: "Le niveau est requis"})
  //     min(schemaPath.level, 5, {message: "Le niveau doit être en 5 et 100"})
  //     max(schemaPath.level, 100, {message: "Le niveau doit être en 5 et 100"})
  //
  //     required(schemaPath.pvActual, {message: "Les PV actuels sont requis"})
  //     min(schemaPath.pvActual, 1, {message: "Les PV actuels doivent être supérieurs à 1"})
  //
  //     required(schemaPath.pvMax, {message: "Les PV max sont requis"})
  //     min(schemaPath.pvMax, 1, {message: "Les PV max doivent être supérieurs à 1"})
  //
  //     required(schemaPath.atk, {message: "L'attaque est requise"})
  //     min(schemaPath.atk, 1, {message: "L'attaque doit être supérieure à 1"})
  //
  //     required(schemaPath.atkStage, {message: "Le cran de l'attaque est requis"});
  //     stage(schemaPath.atkStage, {message: "Le cran de l'attaque doit être compris en -6 et 6"});
  //
  //     required(schemaPath.def, {message: "La défense est requise"});
  //     min(schemaPath.def, 0, {message: "La défense doit être supérieure à 1"});
  //
  //     required(schemaPath.defStage, {message: "Le cran de défense est requis"});
  //     stage(schemaPath.defStage, {message: "Le cran de la défense doit être compris en -6 et 6"});
  //
  //     required(schemaPath.atkSpe, {message: "L'attaque spéciale est requise"});
  //     min(schemaPath.atkSpe, 0, {message: "L'attaque spéciale doit être supérieure à 1"});
  //
  //     required(schemaPath.atkSpeStage, {message: "Le cran de l'attaque spéciale est requis"});
  //     stage(schemaPath.atkSpeStage, {message: "Le cran de l'attaque spéciale doit être compris en -6 et 6"});
  //
  //     required(schemaPath.defSpe, {message: "La défense spéciale est requise"});
  //     min(schemaPath.defSpe, 0, {message: "La défense spéciale doit être supérieure à 1"});
  //
  //     required(schemaPath.defSpeStage, {message: "Le cran de la défense spéciale est requis"});
  //     stage(schemaPath.defSpeStage, {message: "Le cran de la défense spéciale doit être compris en -6 et 6"});
  //
  //     required(schemaPath.vit, {message: "La vitesse est requise"});
  //     min(schemaPath.vit, 0, {message: "La vitesse doit être supérieure à 1"});
  //
  //     required(schemaPath.vitStage, {message: "Le cran de la vitesse est requis"});
  //     stage(schemaPath.vitStage, {message: "Le cran de la vitesse doit être compris en -6 et 6"});
  //
  //     required(schemaPath.prec, {message: "Le cran de la précision est requis"});
  //     stage(schemaPath.prec, {message: "Le cran de la précision doit être compris en -6 et 6"});
  //
  //     required(schemaPath.esq, {message: "Le cran de l'esquive est requis"});
  //     stage(schemaPath.esq, {message: "Le cran de l'esquive doit être compris en -6 et 6"});
  //   });
  // });


  addPokemon($event: FocusEvent) {
    const input = $event.target as HTMLInputElement;
    const value = input.value.trim();

    this.options.push(value)
  }

  // constructor() {
  //   effect(() => {
  //     // Recréer le form quand type ou index change
  //     const newModel = this.actionService.getAttackModel(this.type(), this.index());
  //     this.attackForm = form(newModel, (schemaPath) => {
  //       required(schemaPath.pokemonSpecies, {message: "Le Pokémon est requis"})
  //
  //       url(schemaPath.spriteUrl, {message: 'URL du sprite invalide'});
  //
  //       required(schemaPath.level, {message: "Le niveau est requis"})
  //       min(schemaPath.level, 5, {message: "Le niveau doit être en 5 et 100"})
  //       max(schemaPath.level, 100, {message: "Le niveau doit être en 5 et 100"})
  //
  //       required(schemaPath.pvActual, {message: "Les PV actuels sont requis"})
  //       min(schemaPath.pvActual, 1, {message: "Les PV actuels doivent être supérieurs à 1"})
  //
  //       required(schemaPath.pvMax, {message: "Les PV max sont requis"})
  //       min(schemaPath.pvMax, 1, {message: "Les PV max doivent être supérieurs à 1"})
  //
  //       required(schemaPath.atk, {message: "L'attaque est requise"})
  //       min(schemaPath.atk, 1, {message: "L'attaque doit être supérieure à 1"})
  //
  //       required(schemaPath.atkStage, {message: "Le cran de l'attaque est requis"});
  //       stage(schemaPath.atkStage, {message: "Le cran de l'attaque doit être compris en -6 et 6"});
  //
  //       required(schemaPath.def, {message: "La défense est requise"});
  //       min(schemaPath.def, 0, {message: "La défense doit être supérieure à 1"});
  //
  //       required(schemaPath.defStage, {message: "Le cran de défense est requis"});
  //       stage(schemaPath.defStage, {message: "Le cran de la défense doit être compris en -6 et 6"});
  //
  //       required(schemaPath.atkSpe, {message: "L'attaque spéciale est requise"});
  //       min(schemaPath.atkSpe, 0, {message: "L'attaque spéciale doit être supérieure à 1"});
  //
  //       required(schemaPath.atkSpeStage, {message: "Le cran de l'attaque spéciale est requis"});
  //       stage(schemaPath.atkSpeStage, {message: "Le cran de l'attaque spéciale doit être compris en -6 et 6"});
  //
  //       required(schemaPath.defSpe, {message: "La défense spéciale est requise"});
  //       min(schemaPath.defSpe, 0, {message: "La défense spéciale doit être supérieure à 1"});
  //
  //       required(schemaPath.defSpeStage, {message: "Le cran de la défense spéciale est requis"});
  //       stage(schemaPath.defSpeStage, {message: "Le cran de la défense spéciale doit être compris en -6 et 6"});
  //
  //       required(schemaPath.vit, {message: "La vitesse est requise"});
  //       min(schemaPath.vit, 0, {message: "La vitesse doit être supérieure à 1"});
  //
  //       required(schemaPath.vitStage, {message: "Le cran de la vitesse est requis"});
  //       stage(schemaPath.vitStage, {message: "Le cran de la vitesse doit être compris en -6 et 6"});
  //
  //       required(schemaPath.prec, {message: "Le cran de la précision est requis"});
  //       stage(schemaPath.prec, {message: "Le cran de la précision doit être compris en -6 et 6"});
  //
  //       required(schemaPath.esq, {message: "Le cran de l'esquive est requis"});
  //       stage(schemaPath.esq, {message: "Le cran de l'esquive doit être compris en -6 et 6"});
  //     });
  //   });
  // }
}
