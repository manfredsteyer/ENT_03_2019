import { FlightService } from './../../../../../flight-api/src/lib/services/flight.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { FlightBookingActionTypes, LoadFlights, FlightsLoaded } from './flight-booking.actions';
import { of } from 'rxjs';


@Injectable()
export class FlightBookingEffects {

  @Effect()
  loadFlights$ = this.actions$.pipe(
                    ofType<LoadFlights>(FlightBookingActionTypes.LoadFlights),
                    switchMap(a => 
                      this
                        .flightService
                        .find(
                          a.payload.from, 
                          a.payload.to, 
                          a.payload.urgent
                        )
                        .pipe(
                          catchError(err => of([]))
                        )),
                    map(flights => new FlightsLoaded({flights}))
                );

  constructor(
    private flightService: FlightService,
    private actions$: Actions) {}

}
