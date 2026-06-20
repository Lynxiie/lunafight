import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-cran-input',
    imports: [
        MatFormField,
        MatLabel,
        MatOption,
        MatSelect
    ],
  templateUrl: './cran-input.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cran-input.scss'
})
export class CranInput {

  defaultValue = '0';
  @Input()
  label: string = "";

}
