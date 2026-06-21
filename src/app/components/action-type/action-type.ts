import {Component, EventEmitter, input} from '@angular/core';
import {ActionAttack} from "../action-attack/action-attack";
import {ActionObject} from "../action-object/action-object";
import {ActionSwitch} from "../action-switch/action-switch";
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";

@Component({
  selector: 'app-action-type',
    imports: [
        ActionAttack,
        ActionObject,
        ActionSwitch,
        MatButtonToggle,
        MatButtonToggleGroup
    ],
  templateUrl: './action-type.html',
  styleUrl: './action-type.scss',
})
export class ActionType {

  actionType = 'attack';

  index = input.required<number>();
  type = input.required<'player' | 'foe'>();

  changeActionType($even: MatButtonToggleChange) {
    this.actionType = $even.value;
  }
}
