import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { OktaAuth } from "@okta/okta-auth-js";
import { BehaviorSubject } from "rxjs";
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { OktaConfigService } from './okta-config.service';

@Injectable({
  providedIn: 'root'
})
export class OktaAuthenticationService {
  strStateToken;

  private authClient = new OktaAuth({
    issuer: this.OktaConfigService.strIssuer,
    clientId: this.OktaConfigService.strClientID,
  });

  constructor(
    private OktaConfigService:OktaConfigService,
  ) { }
}
