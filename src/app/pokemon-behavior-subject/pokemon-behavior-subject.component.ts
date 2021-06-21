import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-behavior-subject',
  template: `
  <div *ngIf="pokemon$ | async as pokemon">
    {{ pokemon.name }}
    <button (click)='next(pokemon.id)'>Next</button>
  </div>`,
  styleUrls: ['./pokemon-behavior-subject.component.css']
})
export class PokemonBehaviorSubjectComponent {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  private pokemonIdBehaviorSubject = new BehaviorSubject<number>(1);
  pokemonIdAction$ = this.pokemonIdBehaviorSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  pokemon$ =
    this.pokemonIdAction$
      .pipe(concatMap(id => this.httpClient.get(`${this.url}${id}`)));

  next(pokemonId: number): void {
    this.pokemonIdBehaviorSubject.next(pokemonId + 1);
  }
}
