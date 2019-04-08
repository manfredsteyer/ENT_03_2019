import { UpsertPassenger } from './passenger.actions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import * as fromPassenger from './passenger.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('passenger', fromPassenger.reducer)
  ]
})
export class PassengersModule { 


  constructor(private store: Store<fromPassenger.State>) {

    store.dispatch(new UpsertPassenger({passenger: {id: '52'}}));

  }

}
