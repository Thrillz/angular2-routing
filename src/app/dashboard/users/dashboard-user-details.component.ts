import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  styles: [`
    .jumbotron {
      padding: 30px;
    }
    `],
  template: `
    <div class="jumbotron">
      <div *ngIf="user">
        <h2>{{user.name}} <small>{{user.username}}</small></h2>
      </div>

      <div class="form-group">
        <input type="text" [(ngModel)]="editName" class="form-control">
      </div>

      <div class="form-group text-center">
        <button (click)="cancel()" class="btn btn-danger btn-lg">Cancel</button>
        <button (click)="save()" class="btn btn-success btn-lg">Save</button>
      </div>
    </div>
  `
})
export class DashboardUserDetailsComponent implements OnInit {

  user: User;
  editName: string;

  constructor( private service: UserService, private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {

    this.route.params.forEach(params => {
      let username = params['username'];

      this.service.getUser(username).then(user => {
        this.user = user;
        this.editName = user.name;
      });
    });

  }

  //save the user
  save() {
    this.user.name = this.editName;
    this.router.navigate(['/dashboard/users']);
  }

  // don't save, navigate to dashboard/users
  cancel() {
    this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    console.log("i'm walking away");

    if (this.user.name !== this.editName) {
      return window.confirm("Discard changes?");
    }

    return true;
  }
}
