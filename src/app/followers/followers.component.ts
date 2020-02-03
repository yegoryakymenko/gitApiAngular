import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit, OnDestroy {
  followers: [] = [];
  subscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.subscription = this.httpService.getFollowers(userName).subscribe(
      (response: []) => {
        console.log(response)
        this.followers = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
