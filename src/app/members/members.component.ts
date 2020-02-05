import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {
  members: any = [];
  subscription: Subscription;
  isLoading = true;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private  dataStorageService: DataStorageService) { }

  ngOnInit() {
    const orgName = this.route.snapshot.paramMap.get('org');
    const memList = this.dataStorageService.members;
    if (Object.entries(memList).length) {
      this.members = memList;
      this.isLoading = false;
    } else {
      this.httpService.getMembers(orgName);
    }
    this.subscription = this.dataStorageService.membersChanged.subscribe(
      (members: object[]) => {
        this.isLoading = false;
        this.members = members;
      }
    );
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
