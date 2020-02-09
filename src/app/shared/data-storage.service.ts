import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private organizationSubject = new BehaviorSubject<object>(null);
  private membersSubject = new BehaviorSubject<object[]>([]);
  private memberSubject = new BehaviorSubject<object>(null);
  private followingSubject = new BehaviorSubject<object[]>([]);
  private followersSubject = new BehaviorSubject<object[]>([]);

  //
  organization: Observable<object> = this.organizationSubject.asObservable();
  membersList: Observable<object[]> = this.membersSubject.asObservable();
  currentMember: Observable<object> = this.memberSubject.asObservable();
  followingList: Observable<object[]> = this.followingSubject.asObservable();
  followersList: Observable<object[]> = this.followersSubject.asObservable();

  constructor() { }

  setOrg(org: object) {
    this.organizationSubject.next(org);
  }

  setMembers(members: object[]) {
    this.membersSubject.next(members);
  }


  setMember(member: object) {
    console.log('member', member);
    this.memberSubject.next(member);
  }


  setFollowers(list: object[]) {
    this.followersSubject.next(list);
  }


  setFollowed(list: object[]) {
    this.followingSubject.next(list);
  }

}
