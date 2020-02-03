import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  following: [] = [];
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.httpService.getFollowed(userName).subscribe(
      (response: []) => {
        console.log(response)
        this.following = response;
      }
    );
  }

}
