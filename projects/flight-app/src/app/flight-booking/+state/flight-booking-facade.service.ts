import { FlightsLoaded } from './flight-booking.actions';
import { Observable } from 'rxjs';
import { FlightService, Flight } from '@flight-workspace/flight-api';
import { Injectable } from '@angular/core';
import { FlightBookingAppState } from './flight-booking.reducer';
import { Store } from '@ngrx/store';
import { getFlights } from './flight-booking.selectors';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingFacadeService {
  
  delay(): void {
    alert('not implemented');
  }

  flights$: Observable<Flight[]>;

  constructor(private store: Store<FlightBookingAppState>,
    private flightService: FlightService) { 
      this.flights$ = this.store.select(getFlights);
    }

    find(from: string, to: string, urgent: boolean) {
      this.flightService.find(from, to, urgent).subscribe(
        flights => this.store.dispatch(new FlightsLoaded({flights})),
        err => console.error('err', err)
      )
    }
}
