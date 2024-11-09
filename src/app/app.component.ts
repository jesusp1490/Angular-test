import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * AppComponent sirve como el componente principal de la aplicación.
 * Proporciona la estructura básica de diseño y navegación.
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Test';
}