import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit, OnDestroy {
  following: [] = [];
  subscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.subscription = this.httpService.getFollowed(userName).subscribe(
      (response: []) => {
        console.log(response);
        this.following = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
