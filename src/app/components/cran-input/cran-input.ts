import {Component, Input} from '@angular/core';
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
  styleUrl: './cran-input.scss'
})
export class CranInput {

  defaultValue = '0';
  @Input()
  label: string = "";

}
