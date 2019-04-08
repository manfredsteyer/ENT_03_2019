import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentWithExitWarning {
    canExit(): Observable<boolean>;
}

@Injectable({providedIn: 'root'})
export class ExitGuard implements CanDeactivate<ComponentWithExitWarning> {
    canDeactivate(
        component: ComponentWithExitWarning,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
       
        return component.canExit();
    }
}