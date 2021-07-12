import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-higher-order',
  templateUrl: './higher-order.component.html'
})
export class HigherOrderComponent {
  lastPokemon: any;
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }

  pokemonItemProblem(): void {
    of(2, 4)
    .subscribe(valueId =>
      this.httpClient.get(`${this.url}${valueId}`)
      .subscribe(value => this.lastPokemon = value)
    );
  }

  pokemonItemMap(): void {
    of(2, 4)
      .pipe(
        map(id => this.httpClient.get(`${this.url}${id}`))
      )
      .subscribe(value => this.lastPokemon = value);
    // The lastPokemon value is an observable
  }

  pokemonItemConcatMap(): void {
    of(2, 4)
      .pipe(
        concatMap(id => this.httpClient.get(`${this.url}${id}`))
      )
      .subscribe(value => this.lastPokemon = value);
  }

}
