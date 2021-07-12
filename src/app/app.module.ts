import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CreatorsComponent } from './01-creators/creators.component';
import { SubscribeUnsubscribeComponent } from './02-subscribe-unsubscribe/subscribe-unsubscribe.component';
import { OperatorsComponent } from './03-operators/operators.component';
import { BehaviorSubjectComponent } from './04-behavior-subject/behavior-subject.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorsComponent,
    SubscribeUnsubscribeComponent,
    OperatorsComponent,
    BehaviorSubjectComponent,
    HigherOrderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
