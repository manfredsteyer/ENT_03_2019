import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  LoadFlights = '[FlightBooking] LoadFlights',
  FlightsLoaded = '[FlightBooking] FlightsLoaded',
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;

  constructor(readonly payload: { from: string, to: string, urgent: boolean }) {
  }
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;

  constructor(readonly payload: { flights: Flight[] }) {
  }
}

export type FlightBookingActions = FlightsLoaded | LoadFlights;
