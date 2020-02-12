import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Components/main/main.component';
import { WebprojectsComponent } from './Components/webprojects/webprojects.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
},{
  path: 'WebProjects',
  component: WebprojectsComponent
},{
  path: '**',
  pathMatch: 'full',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
