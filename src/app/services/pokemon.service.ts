import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  private pokemonArray = [
    { id: 1, name: 'Bulbasaur'},
    { id: 2, name: 'Charmander'},
    { id: 3, name: 'Squirtle'},
    { id: 4, name: 'Pikachu'},
  ];

  pokemon$ = from(this.pokemonArray)
    .pipe(
      concatMap( item => of(item).pipe ( delay( 2000 ) ) )
    );
}
