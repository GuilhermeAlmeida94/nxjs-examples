import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-async-pipe',
  template: `
  <div *ngIf="pokemon$ | async as pokemon">
    {{ pokemon.name }}
  </div>`,
  styleUrls: ['./pokemon-async-pipe.component.css']
})
export class PokemonAsyncPipeComponent {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }

  pokemon$ = of(1, 3)
    .pipe(
      concatMap(id => this.httpClient.get(`${this.url}${id}`))
    );
}
