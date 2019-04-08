import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Passenger } from './passenger.model';
import { PassengerActions, PassengerActionTypes } from './passenger.actions';

export interface State extends EntityState<Passenger> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Passenger> = createEntityAdapter<Passenger>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PassengerActions
): State {
  switch (action.type) {
    case PassengerActionTypes.AddPassenger: {
      return adapter.addOne(action.payload.passenger, state);
    }

    case PassengerActionTypes.UpsertPassenger: {
      return adapter.upsertOne(action.payload.passenger, state);
    }

    case PassengerActionTypes.AddPassengers: {
      return adapter.addMany(action.payload.passengers, state);
    }

    case PassengerActionTypes.UpsertPassengers: {
      return adapter.upsertMany(action.payload.passengers, state);
    }

    case PassengerActionTypes.UpdatePassenger: {
      return adapter.updateOne(action.payload.passenger, state);
    }

    case PassengerActionTypes.UpdatePassengers: {
      return adapter.updateMany(action.payload.passengers, state);
    }

    case PassengerActionTypes.DeletePassenger: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PassengerActionTypes.DeletePassengers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PassengerActionTypes.LoadPassengers: {
      return adapter.addAll(action.payload.passengers, state);
    }

    case PassengerActionTypes.ClearPassengers: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
