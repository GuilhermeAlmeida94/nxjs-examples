import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent {

  constructor() { }

  title = 'Creators';

  private pokemonArray = [
    { id: 1, name: 'Bulbasaur'},
    { id: 2, name: 'Charmander'},
    { id: 3, name: 'Squirtle'},
    { id: 4, name: 'Pikachu'},
  ];

  pokemonOf$ = of(...this.pokemonArray);

  pokemonFrom$ = from(this.pokemonArray);

  pokemonFromDelayed$ = from(this.pokemonArray)
    .pipe(
      concatMap( item => of(item).pipe ( delay( 2000 ) ) )
    );
}
