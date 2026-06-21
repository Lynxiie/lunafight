import {Component, ElementRef, inject, ViewChild, ChangeDetectionStrategy, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {PokemonService} from '../../services/pokemon-service';
import {FieldTree, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-pokemon-select',
  imports: [
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    ReactiveFormsModule,
    FormField
  ],
  templateUrl: './pokemon-select.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pokemon-select.scss'
})
export class PokemonSelect {

  pokemonService = inject(PokemonService);

  @ViewChild('pokemonInput')
  input: ElementRef<HTMLInputElement> | undefined;
  options = this.pokemonService.getAllNames();
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
