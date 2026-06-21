import {Component, ElementRef, inject, ViewChild, ChangeDetectionStrategy, Input} from '@angular/core';
import {PokemonService} from '../../services/pokemon-service';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AttackService} from '../../services/attack-service';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FieldTree, FormField} from '@angular/forms/signals';

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
    MatFormField,
    FormField
  ],
  templateUrl: './pokemon-attack-select.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pokemon-attack-select.scss'
})
export class PokemonAttackSelect {
  attackService = inject(AttackService);

  @ViewChild('attackInput')
  input: ElementRef<HTMLInputElement> | undefined;
  attackName = new FormControl('');
  options = this.attackService.getAllNames();
  filteredOptions: string[];

  @Input()
  field!: FieldTree<string, string, "writable">;

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
