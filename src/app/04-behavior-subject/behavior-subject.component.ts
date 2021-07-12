import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
})
export class BehaviorSubjectComponent {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  title = 'Behavior Subject';

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
