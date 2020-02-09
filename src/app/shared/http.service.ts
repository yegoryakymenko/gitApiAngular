import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataStorageService } from './data-storage.service';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient, private dataStorageService: DataStorageService) {
  }


  getOrganization(name: string) {
    this.http.get(`https://api.github.com/orgs/${name}`).subscribe(
      (response: object) => {
        this.dataStorageService.setOrg(response);
      }
    );
  }
  getMembers(orgName: string) {
    this.http.get(`https://api.github.com/orgs/${orgName}/members`).subscribe(
      (response: object[]) => {
        this.dataStorageService.setMembers(response);
;      }
    );
  }
  getMembersPage(orgName: string, page: number) {
    this.http.get(`https://api.github.com/orgs/${orgName}/members?page=${page}`).subscribe(
      (response: object[]) => {
        this.dataStorageService.setMembers(response);
      }
    );
  }
  getUser(userName: string) {
    this.http.get(`https://api.github.com/users/${userName}`).subscribe(
      (response: object) => {
        this.dataStorageService.setMember(response);
      }
    );
  }
  getFollowers(userName: string) {
    this.http.get(`https://api.github.com/users/${userName}/followers`).subscribe(
      (response: object[]) => {
        this.dataStorageService.setFollowers(response);
      }
    );
  }
  getFollowed(userName: string) {
    this.http.get(`https://api.github.com/users/${userName}/following`).subscribe(
      (response: object[]) => {
        this.dataStorageService.setFollowed(response);
      }
    );
  }

}
