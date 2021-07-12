import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorsComponent } from './01-creators/creators.component';

const routes: Routes = [
  {
    path: 'creators',
    component: CreatorsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
