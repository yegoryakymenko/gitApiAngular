import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members.component';
import { UserComponent } from './user/user.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';

const routes: Routes = [
  { path: '',  children: [
      { path: '', pathMatch: 'full', component: MembersComponent},
      { path: ':id', component: UserComponent },
      { path: ':id/followers', component: FollowersComponent },
      { path: ':id/following', component: FollowingComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MembersRoutingModule {

}

