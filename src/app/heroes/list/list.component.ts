import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman', 'Venom', 'Hulk', 'Thor'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero =  this.heroNames.pop();

  }
  // metodos de arreglo y el pop elimina el ultimo elemento en una lista

}
