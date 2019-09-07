import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreRoutes } from './core/core.routing';
import { DiscussionsMenuComponent } from './core/components/discussions-menu/discussions-menu.component';
import { DiscussionViewComponent } from './core/components/discussion-view/discussion-view.component';
import { HomeComponent } from './core/containers/home/home.component';

const routes: Routes = [
  // { path: 'project/:id', component: HomeComponent },
  // { path: 'project/:id/discussion/:id', component: HomeComponent },
  // {
  // { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreRoutes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
