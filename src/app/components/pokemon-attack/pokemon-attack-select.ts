import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {PokemonService} from '../../services/pokemon-service';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AttackService} from '../../services/attack-service';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-pokemon-attack-select',
  imports: [
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    ReactiveFormsModule,
    MatFormField
  ],
  templateUrl: './pokemon-attack-select.html',
  standalone: true,
  styleUrl: './pokemon-attack-select.scss'
})
export class PokemonAttackSelect {
  attackService = inject(AttackService);

  @ViewChild('attackInput')
  input: ElementRef<HTMLInputElement> | undefined;
  attackName = new FormControl('');
  options = this.attackService.getAllNames();
  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    if (!this.input) {
      return;
    }

    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
  }
}
