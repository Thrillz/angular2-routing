import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { aboutRouting } from './about.routing';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

import { UserService } from '../shared/services/user.service';

@NgModule ({
  declarations: [
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent
  ],
  imports: [
    aboutRouting,
    CommonModule
  ],
  providers: [
    UserService,
    AboutUsersResolve,
    AboutUserResolve
  ]
})
export class AboutModule {}
