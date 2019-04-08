import { FlightsLoaded, LoadFlights } from './../+state/flight-booking.actions';
import { Observable } from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {FlightService, Flight} from '@flight-workspace/flight-api';
import { AppState } from '../../+state';
import { Store } from '@ngrx/store';
import { FlightBookingAppState } from '../+state/flight-booking.reducer';
import { getFlights } from '../+state/flight-booking.selectors';
import { FlightBookingFacadeService } from '../+state/flight-booking-facade.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  flights$: Observable<Flight[]>

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightBookingFacade: FlightBookingFacadeService,
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights$ = this.flightBookingFacade.flights$;
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightBookingFacade.find(this.from, this.to, this.urgent);
   
  }

  delay(): void {
    
    this.flightBookingFacade.delay();
  }

}
