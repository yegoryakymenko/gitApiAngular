import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../shared/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  member = null;
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    const member = this.route.snapshot.paramMap.get('id');
    console.log(member);
    this.subscription = this.httpService.getUser(member).subscribe(
      response => {
        console.log(response);
        this.member = response;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
