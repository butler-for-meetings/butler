import { Component, OnInit } from '@angular/core';
import { ButlerApiService } from '../../services/butler-api.service';
import { Discussion } from '../../models/discussion';
import { User } from '../../models/user';
import { camelCaseKeys } from '../../utils/camel-case-keys';
@Component({
  selector: 'app-discussion-view',
  templateUrl: './discussion-view.component.html',
  styleUrls: ['./discussion-view.component.scss']
})
export class DiscussionViewComponent implements OnInit {
  public discussion: Discussion;
  constructor(private _butlerApiService: ButlerApiService) {
  }


  async ngOnInit() {
    let result = await this._butlerApiService.getDiscussion("5d3ead2f4cdaa568cb0b1635");
    result.date = new Date(result.date["$date"]);
    result.host = camelCaseKeys(result.host) as User;
    this.discussion = camelCaseKeys(result) as Discussion;
  }

}
