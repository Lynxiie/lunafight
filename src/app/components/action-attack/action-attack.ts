import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {PokemonSelect} from "../pokemon-select/pokemon-select";
import {MatHint} from '@angular/material/form-field';
import {PokemonAttackSelect} from '../pokemon-attack/pokemon-attack-select';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSelect} from '@angular/material/select';
import {CranInput} from '../cran-input/cran-input';

@Component({
  selector: 'app-action-attack',
  imports: [
    MatCheckbox,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatRadioGroup,
    PokemonSelect,
    MatFormField,
    PokemonAttackSelect,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
    ReactiveFormsModule,
    MatSelect,
    CranInput
  ],
  templateUrl: './action-attack.html',
  standalone: true,
  styleUrl: './action-attack.scss'
})
export class ActionAttack {

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

  addPokemon($event: FocusEvent) {
    const input = $event.target as HTMLInputElement;
    const value = input.value.trim();

    this.options.push(value)
  }
}
