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

export const flightBookingReducer = (state = initialState, action: FlightBookingActions): FlightBookingState => {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded: {
      const flights = action.payload.flights; 
      
      return { ...state, flights };
    }

    case FlightBookingActionTypes.LoadFlights: {
      return { ...state, flights: [] };
    }

    default:
      return state;
  }
}
