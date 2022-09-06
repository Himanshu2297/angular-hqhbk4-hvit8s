import { Injectable } from '@angular/core';
import { car_list } from '../car-itineraries';

@Injectable({
  providedIn: 'root',
})
export class CarSearchService {
  searchDetails = {};
  sortDetails: any;
  vehicleDetails: any = car_list;

  sortValues = [
    {
      sortId: '104',
      sortValueBy: 'Price: Lowest',
    },
    {
      sortId: '105',
      sortValueBy: 'Price: Highest',
    },
    {
      sortId: '106',
      sortValueBy: 'Rental Company: A to Z',
    },
    {
      sortId: '107',
      sortValueBy: 'Rental Company: Z to A',
    },
    {
      sortId: '108',
      sortValueBy: 'Car Type: A to Z',
    },
    {
      sortId: '109',
      sortValueBy: 'Car Type: Z to A',
    },
  ];

  getVehicleDetails() {
    if (this.sortDetails && this.sortDetails.sortType == '104') {
      this.vehicleDetails.CarItineraries.sort((a, b) => {
        return a.fare.perDay - b.fare.perDay;
      });
    }

    if (this.sortDetails && this.sortDetails.sortType == '105') {
      this.vehicleDetails.CarItineraries.sort((a, b) => {
        return b.fare.perDay - a.fare.perDay;
      });
    }

    if (this.sortDetails && this.sortDetails.sortType == '106') {
      this.vehicleDetails.CarItineraries.sort((a, b) => {
        let fa = a.vehicle.name.toLowerCase(),
          fb = b.vehicle.name.toLowerCase();

        if (fa > fb) {
          return 1;
        }
        if (fa < fb) {
          return -1;
        }
        return 0;
      });
    }

    if (this.sortDetails && this.sortDetails.sortType == '107') {
      this.vehicleDetails.CarItineraries.sort((a, b) => {
        let fb = a.vehicle.name.toLowerCase(),
          fa = b.vehicle.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    if (this.sortDetails && this.sortDetails.sortType == '108') {
      this.vehicleDetails.CarItineraries.sort((a, b) => {
        let fa = a.vehicle.type.toLowerCase(),
          fb = b.vehicle.type.toLowerCase();

        if (fa > fb) {
          return 1;
        }
        if (fa < fb) {
          return -1;
        }
        return 0;
      });
    }

    if (this.sortDetails && this.sortDetails.sortType == '109') {
      this.vehicleDetails.CarItineraries.sort((a, b) => {
        let fb = a.vehicle.type.toLowerCase(),
          fa = b.vehicle.type.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    return this.vehicleDetails;
  }

  setSearchDetails(value) {
    this.searchDetails = value;
  }

  getSearchDetails() {
    return this.searchDetails;
  }

  setSortDetails(value) {
    this.sortDetails = value;
  }

  getSortDetails() {
    return this.sortDetails;
  }

  getSortValues() {
    return this.sortValues;
  }
}
