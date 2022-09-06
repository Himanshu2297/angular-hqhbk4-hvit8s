import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarSearchService } from '../services/car-search.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  sortDetails: any;
  sortValues: any;

  // form group
  sortValueFormGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private carSearchService: CarSearchService
  ) {}

  ngOnInit() {
    this.sortValues = this.carSearchService.getSortValues();
    this.sortDetails = this.carSearchService.getSortDetails();
    const selectedValue = this.sortDetails?.sortType
      ? this.sortDetails?.sortType
      : '';
    this.sortValueFormGroup = this.formBuilder.group({
      sortType: new FormControl(selectedValue),
    });
  }

  getvalueById(id) {
    return this.sortValues.find((p) => p.sortId == id);
  }

  onSubmit() {
    console.log(this.sortValueFormGroup);
  }

  backButton() {
    this.carSearchService.setSortDetails(this.sortValueFormGroup.value);
  }
}
