import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character-goku',
  templateUrl: './add-character-goku.component.html',
  styleUrls: ['./add-character-goku.component.css']
})
export class AddCharacterGokuComponent {

  //esto nos sirve para conectarnos para el padre
  @Output()
// Creamos nuestra instacia de este emisor de eventos
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{

    console.log(this.character);
    //Esto es una pequeña validacion para no tolerar que no me mandes super heroe sin nombres
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: ' ', power: 0};
  };


}
