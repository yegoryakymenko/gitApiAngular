import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule} from './members-routing.module';
import { MembersComponent } from './members.component';
import { UserComponent } from './user/user.component';
import { FollowingComponent } from './following/following.component';
import { FollowersComponent } from './followers/followers.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    MembersComponent,
    UserComponent,
    FollowingComponent,
    FollowersComponent,
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    MaterialModule
  ]
})
export class MembersModule {

}
