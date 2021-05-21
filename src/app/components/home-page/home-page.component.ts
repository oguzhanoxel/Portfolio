import { Component, OnInit } from '@angular/core';
import { Github } from 'src/app/models/github';
import { User } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  currentUser: User;
  githubProjects: Github[];

  constructor(
    private userService: UserService,
    private githubService: GithubService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getGithubProjects();
  }

  getUser(): void{
    this.userService.getUser(1).subscribe(response => {
      this.currentUser = response
    })
  }

  getGithubProjects(): void{
    this.githubService.getProjects().subscribe(response => {
      this.githubProjects = response 
    })
  }

}
