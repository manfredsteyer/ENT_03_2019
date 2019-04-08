import { FlightBookingAppState } from './flight-booking.reducer';
import { createSelector } from '@ngrx/store';


// export const getFlights = 
//             (s: FlightBookingAppState) => s.flightBooking.flights;

export const getFlights = createSelector(
    (s: FlightBookingAppState) => s.flightBooking.flights,
    (s: FlightBookingAppState) => s.flightBooking.blackList,
    (flights, blackList) => flights.filter(f => !blackList.includes(f.id))
);