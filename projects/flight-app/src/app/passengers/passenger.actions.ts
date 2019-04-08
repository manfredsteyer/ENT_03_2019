import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Passenger } from './passenger.model';

export enum PassengerActionTypes {
  LoadPassengers = '[Passenger] Load Passengers',
  AddPassenger = '[Passenger] Add Passenger',
  UpsertPassenger = '[Passenger] Upsert Passenger',
  AddPassengers = '[Passenger] Add Passengers',
  UpsertPassengers = '[Passenger] Upsert Passengers',
  UpdatePassenger = '[Passenger] Update Passenger',
  UpdatePassengers = '[Passenger] Update Passengers',
  DeletePassenger = '[Passenger] Delete Passenger',
  DeletePassengers = '[Passenger] Delete Passengers',
  ClearPassengers = '[Passenger] Clear Passengers'
}

export class LoadPassengers implements Action {
  readonly type = PassengerActionTypes.LoadPassengers;

  constructor(public payload: { passengers: Passenger[] }) {}
}

export class AddPassenger implements Action {
  readonly type = PassengerActionTypes.AddPassenger;

  constructor(public payload: { passenger: Passenger }) {}
}

export class UpsertPassenger implements Action {
  readonly type = PassengerActionTypes.UpsertPassenger;

  constructor(public payload: { passenger: Passenger }) {}
}

export class AddPassengers implements Action {
  readonly type = PassengerActionTypes.AddPassengers;

  constructor(public payload: { passengers: Passenger[] }) {}
}

export class UpsertPassengers implements Action {
  readonly type = PassengerActionTypes.UpsertPassengers;

  constructor(public payload: { passengers: Passenger[] }) {}
}

export class UpdatePassenger implements Action {
  readonly type = PassengerActionTypes.UpdatePassenger;

  constructor(public payload: { passenger: Update<Passenger> }) {}
}

export class UpdatePassengers implements Action {
  readonly type = PassengerActionTypes.UpdatePassengers;

  constructor(public payload: { passengers: Update<Passenger>[] }) {}
}

export class DeletePassenger implements Action {
  readonly type = PassengerActionTypes.DeletePassenger;

  constructor(public payload: { id: string }) {}
}

export class DeletePassengers implements Action {
  readonly type = PassengerActionTypes.DeletePassengers;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPassengers implements Action {
  readonly type = PassengerActionTypes.ClearPassengers;
}

export type PassengerActions =
 LoadPassengers
 | AddPassenger
 | UpsertPassenger
 | AddPassengers
 | UpsertPassengers
 | UpdatePassenger
 | UpdatePassengers
 | DeletePassenger
 | DeletePassengers
 | ClearPassengers;
