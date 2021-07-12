import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html'
})
export class CreatorsComponent {
  lastPokemon1: any;
  lastPokemon2: any;
  lastPokemon3: any;

  title = 'Creators';

  private pokemonArray = [
    { id: 1, name: 'Bulbasaur'},
    { id: 2, name: 'Charmander'},
    { id: 3, name: 'Squirtle'},
    { id: 4, name: 'Pikachu'},
  ];

  constructor() {
    of(...this.pokemonArray)
      .subscribe(pokemon => this.lastPokemon1 = pokemon);

    from(this.pokemonArray)
      .subscribe(pokemon => this.lastPokemon2 = pokemon);

    from(this.pokemonArray)
      .pipe(
        concatMap( item => of(item).pipe ( delay( 2000 ) ) )
      )
      .subscribe(pokemon => this.lastPokemon3 = pokemon);
  }
}
