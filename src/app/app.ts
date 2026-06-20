import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Fight} from './components/fight/fight';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Fight, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lunafight');
}
