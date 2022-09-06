import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarSearchService {
  searchDetails = {};
  sortDetails: any;
  vehicleDetails: any = {
    carMockItineraries: {
      currency: 'USD',
      CarItineraries: [
        {
          id: '8ITI1R2FVI61116-2304.1',
          unlimitedMileage: true,
          cancellationDetails: {
            isCancellationFree: true,
            freeCancellationEndDate: '2020-06-29T10:29:59',
          },
          fare: {
            totalAmount: 604,
            perDay: 36,
          },
          vehicle: {
            name: 'Group A - Kia Rio or similar',
            type: 'A class',
            image:
              'https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png',
            specifications: {
              baggageCapacity: '1',
              passengerCapacity: '5',
            },
          },
        },
        {
          id: '8ITI1R2FVI61116-2304.2',
          unlimitedMileage: true,
          cancellationDetails: {
            isCancellationFree: true,
            freeCancellationEndDate: '2020-06-29T10:29:59',
          },
          fare: {
            totalAmount: 636,
            perDay: 37,
          },
          vehicle: {
            name: 'Group B - Ford Focus or similar',
            type: 'C Class',
            image:
              'http://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/2016-ford-focus-se-sedan-black.png',
            specifications: {
              baggageCapacity: '4',
              passengerCapacity: '5',
            },
          },
        },
        {
          id: '8ITI1R2FVI61116-2304.3',
          unlimitedMileage: true,
          cancellationDetails: {
            isCancellationFree: true,
            freeCancellationEndDate: '2020-06-29T10:29:59',
          },
          fare: {
            totalAmount: 636,
            perDay: 37,
          },
          vehicle: {
            name: 'Group B - Kia Soul or similar',
            type: 'D Class',
            image:
              'https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-black.png',
            specifications: {
              baggageCapacity: '2',
              passengerCapacity: '5',
            },
          },
        },
        {
          id: '8ITI1R2FVI61116-2304.4',
          unlimitedMileage: true,
          cancellationDetails: {
            isCancellationFree: true,
            freeCancellationEndDate: '2020-06-29T10:29:59',
          },
          fare: {
            totalAmount: 763,
            perDay: 42,
          },
          vehicle: {
            name: 'Group C - Toyata Corolla or similar',
            type: 'B Class',
            image:
              'https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-grey.png',
            specifications: {
              baggageCapacity: '5',
              passengerCapacity: '5',
            },
          },
        },
        {
          id: '8ITI1R2FVI61116-2304.5',
          unlimitedMileage: true,
          cancellationDetails: {
            isCancellationFree: true,
            freeCancellationEndDate: '2020-06-29T10:29:59',
          },
          fare: {
            totalAmount: 746,
            perDay: 41,
          },
          vehicle: {
            name: 'Group C - Volkswagen Jetta or similar',
            type: 'C Class',
            image:
              'https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-silver.png',
            specifications: {
              baggageCapacity: '2',
              passengerCapacity: '5',
            },
          },
        },
      ],
      paging: {
        pageNo: 1,
        pageSize: 10,
      },
    },
  };

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
      this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
        return a.fare.perDay - b.fare.perDay;
      });
      console.log('sport', this.sortDetails.sortType);
    }

    if (this.sortDetails && this.sortDetails.sortType == '105') {
      this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
        return b.fare.perDay - a.fare.perDay;
      });
      console.log('sport', this.sortDetails.sortType);
    }

    if (this.sortDetails && this.sortDetails.sortType == '106') {
      this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
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

      console.log('sport', this.sortDetails.sortType);
    }

    if (this.sortDetails && this.sortDetails.sortType == '107') {
      this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
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

      console.log('sport', this.sortDetails.sortType);
    }
    if (this.sortDetails && this.sortDetails.sortType == '108') {
      this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
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

      console.log('sport', this.sortDetails.sortType);
    }

    if (this.sortDetails && this.sortDetails.sortType == '109') {
      this.vehicleDetails.carMockItineraries.CarItineraries.sort((a, b) => {
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

      console.log('sport', this.sortDetails.sortType);
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
    console.log('valueeee', value);
    this.sortDetails = value;
  }

  getSortDetails() {
    return this.sortDetails;
  }

  getSortValues() {
    return this.sortValues;
  }
}
