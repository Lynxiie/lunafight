import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/input';
import {MatOption} from '@angular/material/autocomplete';
import {MatDivider} from '@angular/material/divider';
import {MatSelect} from '@angular/material/select';
import {ActionType} from '../action-type/action-type';
import {MatButton} from '@angular/material/button';
import {ActionsService} from '../../services/actions-service';

@Component({
  selector: 'app-fight',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatFormField,
    MatOption,
    MatDivider,
    FormsModule,
    MatSelect,
    ActionType,
    MatButton
  ],
  templateUrl: './fight.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './fight.scss'
})
export class Fight {

  private actionService = inject(ActionsService);

  playerActions = 1;
  foeActions = 1;
  defaultActions = '1-1';

  getActions(actionNumber: number) {
    return Array.from({ length: actionNumber }, (_, i) => i);
  }

  changeActionsNumber(newValue: string) {
    const split = newValue.split("-");
    this.playerActions = Number(split[0]);
    this.foeActions = Number(split[1]);
  }

  launchFight() {
    console.log(this.actionService.getAllPlayerActions())
    console.log(this.actionService.getAllFoeActions())
  }
}
