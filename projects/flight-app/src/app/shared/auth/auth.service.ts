import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  get userName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;

    return claims['given_name'];
    //                ^----------- OIDC
  }

  constructor(private oauthService: OAuthService) { }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

}
