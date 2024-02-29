import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BarraNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sanremo';
}
