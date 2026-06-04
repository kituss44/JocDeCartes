import { Component } from '@angular/core';
import {ServeiService} from "../servei.service"

@Component({
  selector: 'app-finalmarcromaguera',
  standalone: true,
  imports: [],
  templateUrl: './finalmarcromaguera.component.html',
  styleUrl: './finalmarcromaguera.component.css'
})
export class FinalmarcromagueraComponent {
  constructor(public s: ServeiService) {}

}
