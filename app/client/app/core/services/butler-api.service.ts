import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

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
}
