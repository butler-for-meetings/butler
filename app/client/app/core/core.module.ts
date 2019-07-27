import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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

import { HeaderComponent } from './containers/header/header.component';
import { DescriptionBoxComponent } from './components/description-box/description-box.component';
import { MaterialModule } from '../material.module';
import { MissionsBoxComponent } from './components/missions-box/missions-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
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
    DiscussionEditComponent,
    HeaderComponent,
    DescriptionBoxComponent,
    MissionsBoxComponent
  ]
})
export class CoreModule { }
