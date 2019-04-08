import { Router } from '@angular/router';


import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    
    constructor(
        private oauthStorage: OAuthStorage,
        private router: Router) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.url.startsWith('http://www.angular.at/api/')) {
            const headers = req.headers.set('Authorization', 'BEARER ' + this.oauthStorage.getItem('access_token'));
            req = req.clone({ headers });
        }
        
        return next.handle(req).pipe(
            catchError(err => this.handleError(err))
        )
    }
    handleError(err: HttpErrorResponse): Observable<HttpEvent<any>> {
        if (err.status === 401 || err.status === 403) {

            // 401: Unauthorized
            // 403: Forbidden

            this.router.navigate(['/home', {needsLogin: true}]);

        }
        return throwError(err);
    }

}