import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Github } from '../models/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubUrl = 'api/githubProjectLinks';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Github[]> {
    return this.http.get<Github[]>(this.githubUrl)
  }
}
