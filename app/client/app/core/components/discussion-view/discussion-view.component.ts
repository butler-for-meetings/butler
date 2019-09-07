import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../../models/project';
import { Discussion } from '../../models/discussion';
import { Subscription } from 'rxjs';
import { ButlerApiService } from '../../services/butler-api.service';

@Component({
  selector: 'app-discussion-view',
  templateUrl: './discussion-view.component.html',
  styleUrls: ['./discussion-view.component.scss']
})
export class DiscussionViewComponent implements OnInit, OnDestroy  {

  discussion: Discussion;
  obj: object;
  subscription: Subscription;

  ngOnInit() { 
    this.subscription = this.butlerApiService.currentMessage.subscribe(message => { this.obj = message; });
  }

  constructor(private butlerApiService: ButlerApiService) {
      // subscribe to discussion-menu component messages
      this.subscription = this.butlerApiService.currentMessage.subscribe(message => { this.obj = message; });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
