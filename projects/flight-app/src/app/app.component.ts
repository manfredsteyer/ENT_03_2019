import { authConfig } from './auth.config';
import { AppState } from './+state/index';
import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private oauthService: OAuthService,
    private store: Store<AppState>) {


      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();


    const counter$ = store.select(s => s.counter);

    counter$.subscribe(c => {
      console.debug('new counter', c);
    });

    store.dispatch({ type: 'increase', payload: { steps: 2 } });
    store.dispatch({ type: 'increase', payload: { steps: 2 } });
    store.dispatch({ type: 'increase', payload: { steps: 2 } });



  }
}

