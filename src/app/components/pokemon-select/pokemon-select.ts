import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {PokemonService} from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-select',
  imports: [
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    ReactiveFormsModule
  ],
  templateUrl: './pokemon-select.html',
  standalone: true,
  styleUrl: './pokemon-select.scss'
})
export class PokemonSelect {

  pokemonService = inject(PokemonService);

  @ViewChild('pokemonInput')
  input: ElementRef<HTMLInputElement> | undefined;
  pokemonName = new FormControl('');
  options = this.pokemonService.getAllNames();
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
