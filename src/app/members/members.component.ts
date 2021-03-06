import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpService } from '../shared/http.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {
  members: object[] = [];
  private subscription: Subscription;
  isLoading = true;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private  dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.subscription = this.dataStorageService.membersList.subscribe(
      (members: object[]) => {
        this.members = members;
        if (this.members.length) {
          this.isLoading = false;
        }
      });
  }

  onLoadUser(login: string) {
    this.httpService.getUser(login);
  }

  onLoadFollowers(login: string) {
    this.httpService.getFollowers(login);
  }

  onLoadFollowing(login: string) {
    this.httpService.getFollowed(login);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
