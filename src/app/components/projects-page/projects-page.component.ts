import { Component, OnInit } from '@angular/core';
import { Github } from 'src/app/models/github';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  githubProjects: Github[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getGithubProjects();
  }

  getGithubProjects(): void{
    this.githubService.getProjects().subscribe(response => {
      this.githubProjects = response
    })
  }

}
