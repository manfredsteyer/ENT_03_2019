import { FlightsLoaded, UpdateFlight } from './flight-booking.actions';
import { Observable } from 'rxjs';
import { FlightService, Flight } from '@flight-workspace/flight-api';
import { Injectable } from '@angular/core';
import { FlightBookingAppState } from './flight-booking.reducer';
import { Store } from '@ngrx/store';
import { getFlights } from './flight-booking.selectors';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightBookingFacadeService {
  
  delay(): void {
  
    this.flights$.pipe(take(1)).subscribe(flights => {
      const flight = flights[0];

      const date = new Date(flight.date);
      const newDate = new Date(date.getTime() + 15 * 60 * 1000);
      const newFlight = {...flight, date: newDate.toISOString() };

      this.store.dispatch(new UpdateFlight({flight: newFlight}));
    });

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
