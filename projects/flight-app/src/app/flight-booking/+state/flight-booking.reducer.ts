import { AppState } from './../../+state/index';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';
import produce from 'immer';


export const FLIGHT_BOOKING_BRANCH_NAME = 'flightBooking';

export interface FlightBookingAppState extends AppState {
  [FLIGHT_BOOKING_BRANCH_NAME]: FlightBookingState
}

export interface FlightBookingState {
  flights: Flight[],
  stats: object,
  basket: object,
  blackList: number[]
}

export const initialState: FlightBookingState = {
  flights: [],
  stats: {},
  basket: {},
  blackList: [5]
};

export const flightBookingReducer = produce((state, action: FlightBookingActions): FlightBookingState => {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded: {
      const flights = action.payload.flights; 
      state.flights = flights; 
      break;
    }

    case FlightBookingActionTypes.UpdateFlight: {
      const flight = action.payload.flight; 
      const flights = state.flights;

      // Mutable
      const idx = flights.findIndex(f => f.id === flight.id);
      flights[idx] = flight;
      break;
    }

    case FlightBookingActionTypes.LoadFlights: {
      state.flights = [];
    }

    default:
      return state;
  }
}, initialState);
