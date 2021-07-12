import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html'
})
export class OperatorsComponent  {
  lastPokemonName: string;

  title = 'Operators';

  constructor(private pokemonService: PokemonService) { }

  operators(): void {
    this.pokemonService.pokemon$
      .pipe(
        tap(pokemonName => console.log(pokemonName)),
        map(pokemon => pokemon.name),
        take(2)
      )
      .subscribe(value => this.lastPokemonName = value);
  }
}
