import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosRoutes } from './todos';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos/list',
    pathMatch: 'full'
  },
  ...TodosRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
