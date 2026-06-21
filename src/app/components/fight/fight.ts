import {Component, ElementRef, ViewChild, ChangeDetectionStrategy, EventEmitter, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {PokemonSelect} from '../pokemon-select/pokemon-select';
import {MatHint} from '@angular/material/form-field';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatCheckbox} from '@angular/material/checkbox';
import {ActionAttack} from '../action-attack/action-attack';
import {MatDivider} from '@angular/material/divider';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {NgForOf} from '@angular/common';
import {MatSelect, MatSelectChange} from '@angular/material/select';
import {ActionSwitch} from '../action-switch/action-switch';
import {ActionObject} from '../action-object/action-object';
import {ActionType} from '../action-type/action-type';
import {MatButton} from '@angular/material/button';
import {Actions} from '../../services/actions';

@Component({
  selector: 'app-fight',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatFormField,
    MatHint,
    MatInput,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    PokemonSelect,
    MatRadioGroup,
    MatRadioButton,
    MatCheckbox,
    ActionAttack,
    MatDivider,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    NgForOf,
    MatSelect,
    ActionSwitch,
    ActionObject,
    ActionType,
    MatButton
  ],
  templateUrl: './fight.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './fight.scss'
})
export class Fight {

  private actionService = inject(Actions);

  playerActions = 1;
  foeActions = 1;
  defaultActions = '1-1';

  getPlayerActions() {
    return Array.from({ length: this.playerActions }, (_, i) => i);
  }

  getFoeActions() {
    return Array.from({ length: this.foeActions }, (_, i) => i);
  }

  changeActionsNumber(newValue: string) {
    const split = newValue.split("-");
    this.playerActions = Number(split[0]);
    this.foeActions = Number(split[1]);
  }


  launchFight() {
    console.log('toto')
    console.log(this.actionService.attackModel())
  }
}
