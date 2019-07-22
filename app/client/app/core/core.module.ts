import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './containers/home/home.component';
import { ContentComponent } from './containers/content/content.component';
import { SidenavComponent } from './containers/sidenav/sidenav.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProjectsMenuComponent } from './components/projects-menu/projects-menu.component';
import { DiscussionsMenuComponent } from './components/discussions-menu/discussions-menu.component';
import { DiscussionPageComponent } from './components/discussion-page/discussion-page.component';
import { DiscussionViewComponent } from './components/discussion-view/discussion-view.component';
import { DiscussionEditComponent } from './components/discussion-edit/discussion-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent,
    HomeComponent,
    SidenavComponent,
    MainDashboardComponent,
    ProjectDashboardComponent,
    ProjectsMenuComponent,
    DiscussionsMenuComponent,
    DiscussionPageComponent,
    DiscussionViewComponent,
    DiscussionEditComponent
  ]
})
export class CoreModule { }
