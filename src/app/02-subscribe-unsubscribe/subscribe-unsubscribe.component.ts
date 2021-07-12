import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-subscribe-unsubscribe',
  templateUrl: './subscribe-unsubscribe.component.html'
})
export class SubscribeUnsubscribeComponent {
  lastPokemon: any;
  subscription: Subscription;

  constructor(private pokemonService: PokemonService) { }

  title = 'Subscribe and Unsubscribe';

  subscribe(): void {
    this.subscription = this.pokemonService.pokemon$
      .subscribe(value => this.lastPokemon = value);
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
