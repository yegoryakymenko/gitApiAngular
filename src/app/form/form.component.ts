import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../shared/http.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription: Subscription;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'name': new FormControl('', Validators.required)
    });
  }

  onSearch() {
    if (!this.searchForm.valid) {
      return;
    }
    const value = this.searchForm.get('name').value.trim().toLowerCase();
    this.httpService.isLoading.next(true);
    this.subscription = this.httpService.getOrganization(value).subscribe(
      response => {
        this.httpService.organization.next(response);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
