import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  counter: number;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};

export function counterReducer(currentState: number = 0, action: Action): number {
  console.debug('action', action);

  switch(action.type) {
    case "increase": {
      return currentState + action['payload'].steps;
    }
    case "decrease": {
      return currentState - action['payload'].steps;
    }

  }

  return currentState;
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
