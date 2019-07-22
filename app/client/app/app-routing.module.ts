import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreRoutes } from './core/core.routing';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreRoutes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
