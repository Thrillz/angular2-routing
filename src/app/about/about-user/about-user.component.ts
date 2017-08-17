import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component ({
  template: `

    <div *ngIf="user" class="jumbotron text-center">
      <h1>{{user.name}} ({{user.username}})</h1>
      <img [src]="user.avatar" class="img-responsive img-circle">
      <a (click)="goBack()" class="btn btn-lg btn-info">Go back</a>
    </div>
  `,
  styles: [`
    img {
      max-width: 300px;
      margin: 20px auto;
    }
    `]
})

export class AboutUserComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    // grab the current username
    this.route.data.forEach((data: {user: User}) => {
      this.user = data.user
    });
  }

  goBack () {
    this.router.navigate(["/about"]);
  }
}
