import { Action, createAction, props, union } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export const flightsLoaded = createAction(
  '[FlightBooking] FlightsLoaded',
  props<{flights: Flight[]}>()
);

export const loadFlights = createAction(
  '[FlightBooking] LoadFlights',
  props<{from: string, to: string, urgent: boolean}>()
);
