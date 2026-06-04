import {Component, Input} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {

  @Input() name: any;
  @Input() posicio: any;

  constructor(public s : ServeiService) {}

}
