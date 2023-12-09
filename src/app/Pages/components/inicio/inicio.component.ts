import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatButtonModule, MatGridListModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  constructor(private router: Router) {}

  irPrueba1() {
    this.router.navigate(['prueba1']);
  }
}
