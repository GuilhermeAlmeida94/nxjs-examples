import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nxjs-examples';

  stream$: Observable<string>;

  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) {
    this.stream$ = of('bulbasaur', 'charmander');
  }

  creators(): void {
    of('bulbasaur', 'charmander');
    from(['bulbasaur', 'charmander']);
  }

  subscribe(): void {
    let lastPokemon: any;

    of('bulbasaur', 'charmander')
      .subscribe(value => lastPokemon = value);
  }

  subscribeAndUnsubscribe(): void {
    let lastPokemon: any;

    const subscription = of('bulbasaur', 'charmander')
      .subscribe(value => lastPokemon = value);

    subscription.unsubscribe();
  }

  operators(): void {
    let lastPokemon: any;

    of(
      { id: 1, name: 'bulbasaur' },
      { id: 4, name: 'charmander' },
      { id: 7, name: 'squirtle' })
      .pipe(
        tap(pokemonName => console.log(pokemonName)),
        map(pokemon => pokemon.name),
        take(2)
      )
      .subscribe(value => lastPokemon = value);
  }

  highOrderOperatorsProblem(): void {
    let lastPokemon: any;

    of(2, 4)
    .subscribe(valueId =>
      this.httpClient.get(`${this.url}${valueId}`)
      .subscribe(value => lastPokemon = value)
    );
  }

  highOrderOperatorsMap(): void {
    let lastPokemon: any;

    of(1, 3)
      .pipe(
        map(id => this.httpClient.get(`${this.url}${id}`))
      )
      .subscribe(value => lastPokemon = value);
    // O valor de lastPokemon acaba sendo um observable
  }

  highOrderOperatorsConcatMap(): void {
    let lastPokemon: any;

    of(1, 3)
      .pipe(
        concatMap(id => this.httpClient.get(`${this.url}${id}`))
      )
      .subscribe(value => lastPokemon = value);
  }
}
