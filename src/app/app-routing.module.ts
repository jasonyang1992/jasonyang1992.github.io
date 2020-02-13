import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Components/main/main.component';
import { WebprojectsComponent } from './Components/webprojects/webprojects.component';
import { CplusplusComponent } from './Components/Cplusplus/Cplusplus.component';
import { JavaComponent } from './Components/java/java.component';
import { ITBlogComponent } from './Components/itblog/itblog.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
},{
  path: 'WebProjects',
  component: WebprojectsComponent
},{
  path: 'Cplusplus',
  component: CplusplusComponent
},{
  path: 'Java',
  component: JavaComponent
},{
  path: 'ItBlogs',
  component: ITBlogComponent
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
