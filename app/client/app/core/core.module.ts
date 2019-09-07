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
import { TasksBoxComponent } from './components/tasks-box/tasks-box.component';
import { DescriptionBoxComponent } from './components/description-box/description-box.component';
import { HeaderComponent } from './containers/header/header.component';

import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { AddDiscussionDialogComponent } from './components/add-discussion-dialog/add-discussion-dialog.component';
import { ButlerApiService } from './services/butler-api.service';
import { AddCommentDialogComponent } from './components/add-comment-dialog/add-comment-dialog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule
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
    TasksBoxComponent,
    AddDiscussionDialogComponent,
    AddCommentDialogComponent,
    FilterPipe
  ],
  entryComponents: [
    AddDiscussionDialogComponent,
    AddCommentDialogComponent
  ]
})
export class CoreModule { }
