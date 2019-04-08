import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {
    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        
        if (route.data && route.data.performPreloading) {
            return fn();
        }

        return of(null);

        // return fn();
        // return of(true).pipe(delay(7000), switchMap(b => fn()));
    }

}