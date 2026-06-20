import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Fight} from './components/fight/fight';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Fight, MatToolbar],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lunafight');
}
