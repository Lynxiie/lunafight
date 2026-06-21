import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';
import {FieldTree, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-cran-input',
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    FormField
  ],
  templateUrl: './stage-input.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './stage-input.component.scss'
})
export class StageInput {

  label = input("");
  @Input()
  field!: FieldTree<string, string, "writable">;

}
