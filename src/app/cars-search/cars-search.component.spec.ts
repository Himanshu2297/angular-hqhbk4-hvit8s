import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { CarsSearchComponent } from './cars-search.component';
import { Router } from '@angular/router';

const mockFormBuilder = {
  group: () => {
    return {
      pickUpLocation: ['', Validators.required],
      pickUpDate: ['', Validators.required],
      dropOffDate: ['', Validators.required],
      pickUpTime: ['', Validators.required],
      dropOffTime: ['', Validators.required],
      ageOfDriver: ['', Validators.required],
    };
  },
};

const carSearchService = {};

const mockRouter = {
  navigate: (routeName: string) => {},
};

describe('CarsSearchComponent', () => {
  let component: CarsSearchComponent;
  let fixture: ComponentFixture<CarsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsSearchComponent],
      providers: [
        { provide: FormBuilder, useFactory: mockFormBuilder },
        { provide: Router, useFactory: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should searchCars', () => {
    const spy = spyOn(mockRouter, 'navigate').and.callThrough();
    expect(component.submitted).toBeFalsy();
    component.searchCars();
    expect(component.submitted).toBeTruthy();
    expect(spy).toHaveBeenCalledWith('search');
  });
});
