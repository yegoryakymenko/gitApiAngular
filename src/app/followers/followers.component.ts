import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpService } from '../shared/http.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit, OnDestroy {
  followers: object[] = [];
  subscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    const followObj = this.dataStorageService.follows;
    if (Object.entries(followObj).length) {
      this.followers = followObj;
    } else {
      this.httpService.getFollowers(userName);
    }
    this.subscription = this.dataStorageService.followersChanged.subscribe(
      (response: []) => {
        this.followers = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
