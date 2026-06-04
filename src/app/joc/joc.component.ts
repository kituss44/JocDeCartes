import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ServeiService} from "../servei.service";
import {routes} from "../app.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;

  constructor(public s: ServeiService, private rout: Router) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    console.log(this.s.t1)
    console.log(this.s.t2)
    console.log(this.s.t3)
    let segonapart: number;
    if(this.s.t1 <=2 || this.s.t2 <=2 || this.s.t3 <=3){
      if(!this.pickCardAnimation){
        this.currentCard = this.game?.stack.pop();
        this.pickCardAnimation = true;
        console.log(this.currentCard)
        if(this.s.persona == 0){
          this.s.t1++;
          if(this.currentCard == 'Comodin_0'){
            this.s.n1 = this.s.n1 *2
          }
          else{
            segonapart = this.currentCard.split("_")[1];
            console.log(segonapart)
            segonapart = Number(segonapart);
            if(segonapart % 2 !== 0){
              this.s.n1 = this.s.n1 + segonapart;
            }
          }
          if (this.s.n1 > 21 || this.s.t1 >=3){
            this.s.persona++;
          }
        }
        else {
          if(this.s.persona == 1){
            this.s.t2 ++
            if(this.currentCard == 'Comodin_0'){
              this.s.n2 = this.s.n2 *2
            }
            else{
              segonapart = this.currentCard.split("_")[1];
              console.log(segonapart)
              segonapart = Number(segonapart);
              if(segonapart % 2 !== 0){
                this.s.n2 = this.s.n2 + segonapart;
              }
            }
            if (this.s.n2 > 21 || this.s.t2 >=3){
              this.s.persona++;
            }
          }
          else{
            this.s.t3++
            if(this.currentCard == 'Comodin_0'){
              this.s.n3 = this.s.n3 *2
            }
            else{
              segonapart = this.currentCard.split("_")[1];
              console.log(segonapart)
              segonapart = Number(segonapart);
              if(segonapart % 2 !== 0){
                this.s.n3 = this.s.n3 + segonapart;
              }
            }
            if (this.s.n3 > 21|| this.s.t3 >=3){
              this.rout.navigateByUrl('/gameoverromaguera');
            }
          }
        }


        setTimeout(()=> {
          this.game?.playedCards.push(this.currentCard);
          this.pickCardAnimation = false;
        }, 300);
      }
      if ( this.s.persona >2){
        this.s.persona = 0;
      }
    }
    else{
      console.log("final")
      this.rout.navigateByUrl('/gameoverromaguera');
    }
  }


  cambiarjugador(){
    this.s.persona++
  }
}
