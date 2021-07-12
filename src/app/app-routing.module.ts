import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorsComponent } from './01-creators/creators.component';
import { SubscribeUnsubscribeComponent } from './02-subscribe-unsubscribe/subscribe-unsubscribe.component';
import { OperatorsComponent } from './03-operators/operators.component';
import { BehaviorSubjectComponent } from './04-behavior-subject/behavior-subject.component';
import { HigherOrderComponent } from './higher-order/higher-order.component';

const routes: Routes = [
  {
    path: 'creators',
    component: CreatorsComponent
  },
  {
    path: 'subscribe-unsubscribe',
    component: SubscribeUnsubscribeComponent
  },
  {
    path: 'operators',
    component: OperatorsComponent
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectComponent
  },
  {
    path: 'higher-order',
    component: HigherOrderComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
