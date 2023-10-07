import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        HousingLocationComponent
    ]
})

export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  baseUrl: any;

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }




  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}






