import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OktaConfigService } from '../shared/okta/okta-config.service';
import { OktaGetTokenService } from '../shared/okta/okta-get-token.service';
import { Location } from '@angular/common';
// import { HostListener } from "@angular/core";

@Component({
  selector: 'app-iframe-widget',
  templateUrl: './iframe-widget.component.html',
  styleUrls: ['./iframe-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IframeWidgetComponent implements OnInit {
  public aAuthService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strSafeSite: SafeResourceUrl;
  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private sanitizer: DomSanitizer,
    private OktaConfigService: OktaConfigService,
    private OktaGetTokenService: OktaGetTokenService,
    private location:Location,
  ) { 
    location.subscribe(val => console.log(val));
  }

//  @HostListener('window:resize', ['$event'])
  //  onResize(event) {
  //    event.target.innerWidth;
  //    window.location.reload();
  //  }


  async ngOnInit() {
    this.strSafeSite = await this.sanitizer.bypassSecurityTrustResourceUrl(this.OktaConfigService.strBaseURI + this.OktaConfigService.striFrameparams);
  }



}
