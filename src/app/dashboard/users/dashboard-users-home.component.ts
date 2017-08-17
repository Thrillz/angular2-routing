import { Component, OnInit } from '@angular/core';

@Component({
  styles: [`
      .jumbotron {
        padding: 30px;
      }
    `],
  template: `
    <div class="jumbotron">
      <h2>Choose User</h2>
    </div>
  `
})
export class DashboardUsersHomeComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
