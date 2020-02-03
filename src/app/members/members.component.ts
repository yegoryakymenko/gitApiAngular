import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {
  members: any = [];
  subscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    const orgName = this.route.snapshot.paramMap.get('org');
    this.subscription = this.httpService.getMembers(orgName).subscribe(
      response => {
        console.log(response);
        this.members = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
