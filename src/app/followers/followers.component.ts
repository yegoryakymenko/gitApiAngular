import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: [] = [];
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('id');
    this.httpService.getFollowers(userName).subscribe(
      (response: []) => {
        console.log(response)
        this.followers = response;
      }
    );
  }

}
