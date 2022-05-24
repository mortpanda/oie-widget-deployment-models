import { Component, OnInit } from '@angular/core';
import { OktaConfigService } from '../shared/okta/okta-config.service';
import { ViewEncapsulation } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HostListener } from "@angular/core";
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuListService } from '../shared/menu-items/menu-list.service';

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
  displayResponsive: boolean;
  appNav: MenuItem[];


  constructor(
    private breakpointObserver: BreakpointObserver,
    private OktaConfigService: OktaConfigService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private _router: Router,
    private MenuListService: MenuListService,
  ) {

    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
    this.appNav = this.MenuListService.appNav;
  }

  async ngOnInit() {
    this.authService.closeSession();
  }

}
