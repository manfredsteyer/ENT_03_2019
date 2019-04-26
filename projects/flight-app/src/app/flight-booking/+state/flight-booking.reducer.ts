import { createReducer, on } from "@ngrx/store";
import { loadFlights, flightsLoaded } from './flight-booking.actions';
import { AppState } from "../../+state";
import { Flight } from '@flight-workspace/flight-api';

export const FLIGHT_BOOKING_BRANCH_NAME = 'flightBooking';

export interface FlightBookingAppState extends AppState {
  [FLIGHT_BOOKING_BRANCH_NAME]: FlightBookingState
}

export interface FlightBookingState {
  flights: Flight[],
  blackList: number[]
}

export const initialState: FlightBookingState = {
  flights: [],
  blackList: [5]
};

export const flightBookingReducer = createReducer(
  initialState,
  on(loadFlights, (state, action) => {
    return { ...state, flights: [] };
  }),
  on(flightsLoaded, (state, action) => {
    const flights = action.flights;
    return { ...state, flights };
  })
)
