import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonAsyncPipeComponent } from './pokemon-async-pipe/pokemon-async-pipe.component';
import { PokemonBehaviorSubjectComponent } from './pokemon-behavior-subject/pokemon-behavior-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonAsyncPipeComponent,
    PokemonBehaviorSubjectComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
