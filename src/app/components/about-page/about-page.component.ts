import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  currentUser: User;
  
  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser(1).subscribe(response => {
      this.currentUser = response
    })
  }

}
