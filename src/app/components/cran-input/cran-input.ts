import {Component, Input, ChangeDetectionStrategy, input, InputSignal, WritableSignal} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';
import {FieldTree, FormField, FormFieldBindingOptions} from '@angular/forms/signals';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cran-input',
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    FormField,
    NgIf
  ],
  templateUrl: './cran-input.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cran-input.scss'
})
export class CranInput {

  defaultValue = '0';
  label = input("");

  @Input()
  field!: any;

  setField(v: any) {
    console.log(v)
    console.log(this.field)
    // this.field = v // si writable signal
  }
}
