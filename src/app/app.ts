import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  template: '<app-header/>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('La-Vin-En-Rose_project');
}
