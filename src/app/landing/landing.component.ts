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
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MenuItem, MessageService } from 'primeng/api';
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

  items: MenuItem[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    // private OktaWidgetService:OktaWidgetService,
    private OktaConfigService: OktaConfigService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private _router: Router,
    private IframeWidgetComponent:IframeWidgetComponent,
    public _matdialog: MatDialog,
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
    this.items = [
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io'

      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io'

      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io'

      },
      {
        icon: 'pi pi-external-link',
        url: 'http://angular.io'

      }
    ];
  }

  test() {
    alert('test')
  }


  async signInHosted() {    
      await this.HostedAuthService.closeSession();
      await this.HostedAuthService.signInWithRedirect(); 
  }

  async openiFrameModal(){
    await this.HostedAuthService.closeSession();
    const WidgetDialogConfig = new MatDialogConfig();
    WidgetDialogConfig.disableClose = false;
    WidgetDialogConfig.id = "iframe-modal-component";
    // WidgetDialogConfig.height = "700px";
    // WidgetDialogConfig.width = "450px";
    WidgetDialogConfig.width = "80vw";
    const modalDialog = this._matdialog.open(IframeWidgetComponent, WidgetDialogConfig);
  }


//   showModalDialog() {
//     this.displayResponsive = true;
// }
}
