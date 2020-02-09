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
  constructor(private httpService: HttpService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.orgSub = this.dataStorageService.organization.subscribe(
      org => {
        if (org) {
          this.isLoading = true;
        }
        setTimeout(() => {
          this.organization = org;
          this.isLoading = false;
        }, 750);
      }
    );
  }

  ngOnDestroy(): void {
    this.orgSub.unsubscribe();
  }

  onSearch(name: string) {
    this.httpService.getMembers(name);
  }

}
