import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../../pages-routing.module';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatButtonModule, PagesRoutingModule],
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.scss'],
})
export class CrucigramaComponent {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/prueba1']);
  }
}
