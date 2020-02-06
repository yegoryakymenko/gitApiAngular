import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HttpService } from '../shared/http.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit, OnDestroy {
  organization = null;
  orgSub: Subscription;
  isLoading = false;
  isLoadingSub: Subscription;
  constructor(private httpService: HttpService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.isLoadingSub = this.httpService.isLoading.subscribe(status => {
      this.isLoading = status;
    });
    const orgObj = this.dataStorageService.org;
    this.orgSub = this.dataStorageService.organizationChanged.subscribe(
      org => {
        this.organization = org;
        this.isLoading = false;
      }
    );
    if (Object.entries(orgObj).length) {
      this.organization = orgObj;
    }
  }

  ngOnDestroy(): void {
    this.orgSub.unsubscribe();
    this.isLoadingSub.unsubscribe();
  }

  onSearch(name: string) {
    this.httpService.getMembers(name);
  }

}
