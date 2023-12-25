import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { shuffle } from 'lodash';
import { BehaviorSubject, combineLatest, finalize, interval, takeWhile } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { ModalService } from 'src/app/shared/modal.service';
import { superada } from 'src/app/state/pruebas.actions';

@Component({
  selector: 'app-blackjack',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlackjackComponent implements OnInit {
  deck: string[] = [];
  private _cartasJugador = new BehaviorSubject<string[]>([]);
  private _puntosJugador = new BehaviorSubject<number>(0);
  private _cartasOrdenador = new BehaviorSubject<string[]>([]);
  private _puntosOrdenador = new BehaviorSubject<number>(0);

  detener = false;

  // Tréboles (Clubs)
  // Diamantes (Diamonds)
  // Corazones (Hearts)
  // Picas (Spades)
  tipos = ['C', 'D', 'H', 'S'];

  especiales = ['A', 'J', 'Q', 'K']; // as, jota, reina, rey

  vm$ = combineLatest({
    cartasJugador: this._cartasJugador,
    puntosJugador: this._puntosJugador,
    cartasOrdenador: this._cartasOrdenador,
    puntosOrdenador: this._puntosOrdenador,
  });

  constructor(
    private _modalService: ModalService,
    private _store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this._modalService.modalText({
      titulo: 'EXPLICACIÓN',
      texto: '¡¡Blackjack!! ¿Sabes jugar no? No tienes que pasarte de 21!',
      imagen: 'friends/cartas.gif',
      button: 'Comenzar',
    });

    this._inicializarJuego();
  }

  nuevoJuego() {
    this.detener = false;
    this._inicializarJuego();
  }

  _inicializarJuego() {
    this._crearDeck();
    this._puntosJugador.next(0);
    this._cartasJugador.next([]);
    this._puntosOrdenador.next(0);
    this._cartasOrdenador.next([]);
  }

  pedirCarta() {
    const carta = this._pedirCarta();

    const cartas = [...this._cartasJugador.value];
    cartas.push(carta);
    this._cartasJugador.next(cartas);

    const ptosJugador = this._puntosJugador.value + this._valorCarta(carta);
    this._puntosJugador.next(ptosJugador);

    if (this._puntosJugador.value >= 21) {
      this._turnoOrdenador();
    }
  }

  detenerJuego() {
    this.detener = true;
    this._turnoOrdenador();
  }

  private _turnoOrdenador() {
    interval(1000)
      .pipe(
        takeWhile(() => this._puntosOrdenador.value < this._puntosJugador.value && this._puntosJugador.value <= 21),
        finalize(() => this._estadoJuego()),
      )
      .subscribe(() => {
        const carta = this._pedirCarta();

        const cartas = [...this._cartasOrdenador.value];
        cartas.push(carta);
        this._cartasOrdenador.next(cartas);

        const ptosOrdenador = this._puntosOrdenador.value + this._valorCarta(carta);
        this._puntosOrdenador.next(ptosOrdenador);
      });
  }

  private _crearDeck() {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of this.tipos) {
        this.deck.push(i + tipo);
      }
    }

    for (let esp of this.especiales) {
      for (let tipo of this.tipos) {
        this.deck.push(esp + tipo);
      }
    }

    this.deck = shuffle(this.deck);
  }

  private _pedirCarta(): string {
    const carta = this.deck.pop();
    if (carta !== null && carta !== undefined) {
      return carta;
    }
    throw 'Se acabaron las cartas de la baraja';
  }

  private _valorCarta(carta: string): number {
    const valor = carta.substring(0, carta.length - 1);
    if (isNaN(Number(valor))) {
      return valor == 'A' ? 11 : 10;
    } else {
      return Number(valor);
    }
  }

  private _estadoJuego() {
    if (this._puntosJugador.value > 21) {
      this._modalService.mostrarModalFail();
    } else if (this._puntosOrdenador.value <= 21 && this._puntosOrdenador.value >= this._puntosJugador.value) {
      this._modalService.mostrarModalFail();
    } else {
      this._modalService.mostrarModalOk();
      this._store.dispatch(superada({ id: 4 }));
    }
  }
}
