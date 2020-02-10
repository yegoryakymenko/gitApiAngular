import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { HttpService } from '../../shared/http.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  member = null;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.subscription = this.dataStorageService.currentMember.subscribe(
      (currentMember: object) => {
        this.member = currentMember;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
