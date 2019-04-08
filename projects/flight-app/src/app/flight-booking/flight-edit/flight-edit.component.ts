import { ComponentWithExitWarning } from './../../shared/exit/exit.guard';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, ComponentWithExitWarning {
 
  id: string;
  showDetails: string;
  showWarning = false;
  sender: Observer<boolean>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  decide(decision: boolean) {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canExit(): Observable<boolean> {
    
    this.showWarning = true;
    return new Observable((sender: Observer<boolean>) => {
      this.sender = sender;
    });

  }

}
