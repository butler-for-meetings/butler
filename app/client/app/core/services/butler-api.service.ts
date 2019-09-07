import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButlerApiService {

  constructor(private _http: HttpClient) { }

  public discussionMenuToView = new Subject<any>();
  public discussionViewToMenu = new Subject<any>();

  /**
   * Get all projetcs
   */
  getAllProjetcs(): Promise<Project[]> {
    return this._http.get<Project[]>('/api/projects').toPromise();
  }
}
