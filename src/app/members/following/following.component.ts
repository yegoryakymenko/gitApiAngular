import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../shared/http.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit, OnDestroy {
  following: object[] = [];
  subscription: Subscription;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {
  }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.subscription = this.dataStorageService.followingList.subscribe(
      (response: object[]) => {
        this.following = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
