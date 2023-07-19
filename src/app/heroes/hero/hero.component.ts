import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  //Propiedades
  public name:string = 'spiderMan';
  public edad:number = 45;

  // getter son una propiedad que se ve como una propiedad pero realmente es un METODO
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  //Los metodos debemos invocarlo con parentisis
  getHeroDescription():string {
    return `${ this.name } - ${ this.edad } ` ;
  }

  chageHero():string{
    return this.name = 'Venom' ;

    //cambiar nombre del herue
  }

  changeAge():number{
    return this.edad = 50;
  }

  resetForm():void {
    this.name = 'spiderMan';
    this.edad = 45;
  }



}
