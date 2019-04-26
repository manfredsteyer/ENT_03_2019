import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { map, switchMap, catchError } from 'rxjs/operators';
import { loadFlights, flightsLoaded } from './flight-booking.actions';
import { FlightService } from '@flight-workspace/flight-api';
import { of } from 'rxjs';

@Injectable()
export class FlightBookingEffects {

  loadFlights = createEffect(() => 
    this.actions$.pipe(
      ofType(loadFlights), 
      switchMap(a => this.flightService.find(
        a.from, 
        a.to, 
        a.urgent).pipe(catchError(err => of([])))),
      map(flights => flightsLoaded({flights}))));

  constructor(
    private actions$: Actions,
    private flightService: FlightService) {}

}
