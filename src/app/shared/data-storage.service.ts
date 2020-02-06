import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  organizationChanged = new Subject<object>();
  membersChanged = new Subject<object[]>();
  memberChanged = new Subject<object>();
  followingChanged = new Subject<object[]>();
  followersChanged = new Subject<object[]>();

  //
  private organization: object;
  private membersList: object[] = [];
  private currentMember: object;
  private following: object[] = [];
  private followed: object[] = [];

  constructor() { }

  setOrg(org: object) {
    this.organization = org;
    this.organizationChanged.next(this.organization);
  }

  get org() {
    return {...this.organization};
  }

  setMembers(members: object[]) {
    this.membersList = members;
    this.membersChanged.next(this.membersList);
  }

  get members() {
    return this.membersList.slice();
  }

  setMember(member: object) {
    this.currentMember = member;
    this.memberChanged.next(this.currentMember);
  }

  get member() {
    return {...this.currentMember};
  }
  setFollowers(list: object[]) {
    this.following = list;
    this.followersChanged.next(this.following);
  }

  get follows() {
    return [...this.following];
  }

  setFollowed(list: object[]) {
    this.followed = list;
    this.followingChanged.next(this.followed);
  }

  get followd() {
    return [...this.followed];
  }

}
