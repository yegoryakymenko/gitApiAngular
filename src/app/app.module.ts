import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultsListComponent,
    MembersComponent,
    HomeComponent,
    UserComponent,
    FollowersComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
