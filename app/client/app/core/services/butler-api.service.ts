import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ButlerApiService {
  public constructAPIRoute: (endpoint: string) => string;
  constructor(private _http: HttpClient) {
    this.constructAPIRoute = (endpoint: string): string => {
      return `http://localhost:5000/api/v1/${endpoint}`;
    }
  }

  /**
   * Get all projects
   */
  getAllProjects(): Promise<Project[]> {
    return this._http.get<Project[]>(this.constructAPIRoute("projects")).toPromise();
  }

  /**
  * Get a specific project using it's ID
  * @param {string} id The ID of the project
  */
  getProject(id: string) : Promise<Project> {
    return this._http.get<Project>(this.constructAPIRoute(`projects/${id}`)).toPromise();
  }
}
