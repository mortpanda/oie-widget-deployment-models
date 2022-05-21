import { Component, OnInit } from '@angular/core';
// import {OktaWidgetService} from '../shared/okta/okta-widget.service';
import { OktaConfigService } from '../shared/okta/okta-config.service';
import { ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HostListener } from "@angular/core";
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { Router } from '@angular/router';
import { IframeWidgetComponent } from '../iframe-widget/iframe-widget.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  public HostedAuthService = new OktaAuth(this.OktaSDKAuthService.HostedConfig);
  smallScreen: boolean;

  displayModal: boolean;
  displayResponsive:boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    // private OktaWidgetService:OktaWidgetService,
    private OktaConfigService: OktaConfigService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private _router: Router,
    private IframeWidgetComponent:IframeWidgetComponent,
    
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    window.location.reload();
  }

  async ngOnInit() {
    // await this.OktaWidgetService.CloseWidget();
    // await this.OktaWidgetService.login(this.OktaConfigService.strRedirectURL,true);
  }

  test() {
    alert('test')
  }

  strMyAccessToken;
  async signInHosted() {    
      await this.HostedAuthService.closeSession();
      await this.HostedAuthService.signInWithRedirect(); 
  }

  showModalDialog() {
    this.displayResponsive = true;
}
}
