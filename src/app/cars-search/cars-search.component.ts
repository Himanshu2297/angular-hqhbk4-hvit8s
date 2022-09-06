import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarSearchService } from '../services/car-search.service';
import { driver_age } from '../driver-age';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent implements OnInit {
  carsSearchForm: FormGroup;
  submitted = false;
  ageList: any = driver_age;
  currentDate = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private carSearchService: CarSearchService
  ) {}

  ngOnInit() {
    this.carsSearchForm = this.formBuilder.group({
      pickUpLocation: ['', Validators.required],
      pickUpDate: ['', Validators.required],
      dropOffDate: ['', Validators.required],
      pickUpTime: ['', Validators.required],
      dropOffTime: ['', Validators.required],
      ageOfDriver: ['', Validators.required],
    });
  }

  get formControls() {
    return this.carsSearchForm.controls;
  }

  searchCars() {
    this.submitted = true;
    this.carSearchService.setSearchDetails(this.carsSearchForm.value);
    if (this.carsSearchForm.invalid) {
      return;
    }
    this.router.navigate(['search']);
  }
}
