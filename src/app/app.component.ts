import { Component } from '@angular/core';
import { Carta } from "./shared/model/carta";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   cartaManutencao: Carta;
   cartas: Array<Carta>;
   
   constructor(){
    this.cartas = [
      new Carta("Charizard", 180, "wing attack", "water", "https://w0.peakpx.com/wallpaper/946/1022/HD-wallpaper-charizard-pokemon.jpg")
    ]
    this.cartaManutencao = new Carta("Charizard", 180, "wing attack", "water", "https://w0.peakpx.com/wallpaper/946/1022/HD-wallpaper-charizard-pokemon.jpg");


   }
   cadastrar(): void {
    this.cartas.push(this.cartaManutencao)
  }
  excluir(cartaRemover: Carta): void {
    const idx = this.cartas.findIndex(carta => cartaRemover.nome === carta.nome);
    this.cartas.splice(idx, 1);

  }
  editar(carta: Carta): void {
    this.cartaManutencao = carta;




  }




}
