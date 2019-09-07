import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButlerApiService {

  constructor(private _http: HttpClient) { }

  /**
   * Get all projetcs
   */
  getAllProjetcs(): Promise<Project[]> {
    return this._http.get<Project[]>('/api/projects').toPromise();
  }

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();
  
  changeMessage(project, discussionIndex) {
    this.messageSource.next({project, discussionIndex})
  }

}
