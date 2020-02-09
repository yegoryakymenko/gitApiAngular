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

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.subscription = this.dataStorageService.followersList.subscribe(
      (response: []) => {
        this.followers = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
