import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authConfig: AuthConfig = {
 
  // Where is the Auth-Server
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // Who am I?
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa-demo',

  // What does the client want?
  scope: 'openid profile email voucher',
  //           Identity       | Access
  //           ID_Token       | Access_Token
  //           OIDC           | Custom


}