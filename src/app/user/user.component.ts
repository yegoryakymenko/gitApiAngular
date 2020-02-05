import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../shared/http.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';

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
    private  dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    const member = this.route.snapshot.paramMap.get('id');
    const memberObj = this.dataStorageService.member;
    if (Object.entries(memberObj).length) {
      this.member = memberObj;
    } else {
        this.httpService.getUser(member);
    }
    this.subscription = this.dataStorageService.memberChanged.subscribe(
      (currentMember: object) => {
        this.member = currentMember;
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
