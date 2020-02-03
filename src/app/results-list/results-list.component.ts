import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit, OnDestroy {
  organization = null;
  isLoading = false;
  orgSub: Subscription;
  isLoadingSub: Subscription;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.isLoadingSub = this.httpService.isLoading.subscribe(status => {
      this.isLoading = status;
    });
    this.orgSub = this.httpService.organization.subscribe(org => {
      this.organization = org;
      console.log(this.organization);
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.orgSub.unsubscribe();
    this.isLoadingSub.unsubscribe();
  }

}
