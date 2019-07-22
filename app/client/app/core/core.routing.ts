
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {
    path: '',  component: HomeComponent
  }
];

export const CoreRoutes = RouterModule.forChild(routes);
