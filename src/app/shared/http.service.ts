import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({providedIn: 'root'})
export class HttpService {
  organization = new Subject<object>();
  isLoading = new Subject<boolean>();
  constructor(private http: HttpClient) {
  }


  getOrganization(name: string) {
    return this.http.get(`https://api.github.com/orgs/${name}`);
  }
  getMembers(orgName: string) {
    return this.http.get(`https://api.github.com/orgs/${orgName}/members`);
  }
  getUser(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }
  getFollowers(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/followers`);
  }
  getFollowed(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/following`);
  }

}
