import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Fight} from './components/fight/fight';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [Fight, MatToolbar],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lunafight');
}
