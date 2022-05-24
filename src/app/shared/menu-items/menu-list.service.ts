import { Injectable } from '@angular/core';
import { OktaSDKAuthService } from '../okta/okta-auth.service';
import { OktaConfigService } from '../okta/okta-config.service';
import { OktaAuth } from '@okta/okta-auth-js';
import { IframeWidgetComponent } from '../../iframe-widget/iframe-widget.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import {OktaWidgetService} from '../../shared/okta/okta-widget.service';
import { DefaultWidgetComponent } from '../../default-widget/default-widget.component';
import { CustomWidgetComponent } from '../../custom-widget/custom-widget.component';
import { SdkLoginComponent } from '../../sdk-login/sdk-login.component';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
  public HostedAuthService = new OktaAuth(this.OktaSDKAuthService.HostedConfig);
  public AuthService = new OktaAuth(this.OktaSDKAuthService.config);
  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    private IframeWidgetComponent: IframeWidgetComponent,
    private _matdialog: MatDialog,
    // private OktaWidgetService:OktaWidgetService,
    private DefaultWidgetComponent: DefaultWidgetComponent,
    private CustomWidgetComponent: CustomWidgetComponent,
    private SdkLoginComponent:SdkLoginComponent,
  ) { }

  appNav = [
    {
      tooltipOptions: {
        tooltipLabel: "Hosted Widget",
        tooltipPosition: "top",
      },
      icon: 'pi pi-cloud',
      command: () => {
        this.signInHosted();
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "iFrame (Workforceのみ)",
        tooltipPosition: "top",
      },
      icon: 'pi pi-desktop',
      command: () => {
        this.openiFrameModal();
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "デフォルトのWidget",
        tooltipPosition: "top",
      },
      icon: 'pi pi-box',
      command: () => {
        this.openDefaultWidgetModal();
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "カスタムのWidget",
        tooltipPosition: "top",
      },
      icon: 'pi pi-cog',
      command: () => {
        this.openCustomWidgetModal();
      }
    },

    // openSDKModal
    {
      tooltipOptions: {
        tooltipLabel: "SDKとのハイブリッド式",
        tooltipPosition: "top",
      },
      icon: 'pi pi-android',
      command: () => {
        this.openSDKModal();
      }
    },
  ];

  ItemsMenu = [
    {
      label: 'ホーム',
      icon: "pi pi-home",
      style: 'font-size: 1.5rem',
      command: () => {
        this.GoHome();
      }
    },
    {
      label: 'ログアウト',
      icon: "pi pi-sign-out",
      style: 'font-size: 1.5rem;',
      command: () => {
        this.Logout();
      }
    },
    {
      label: 'Facebook',
      icon: "pi pi-fw pi-facebook",
      style: 'font-size: 0.7rem',
      url: 'https://www.facebook.com/Okta/',
    },
    {
      label: 'LinkedIn',
      icon: "pi pi-fw pi-linkedin",
      style: 'font-size: 0.7rem',
      url: 'https://www.linkedin.com/company/okta-inc-/',
    },
    {
      label: 'Youtube',
      icon: "pi pi-fw pi-youtube",
      style: 'font-size: 0.7rem',
      url: 'https://www.youtube.com/OktaInc',
    },
    {
      label: 'Twitter',
      icon: "pi pi-fw pi-twitter",
      style: 'font-size: 0.7rem',
      url: 'https://twitter.com/okta_japan',
    },
    
  ];

  SmallMenu = [
    {
      label: 'ホーム',
      icon: "pi pi-home",
      // style:'font-size: 1.5rem',
      command: () => {
        this.GoHome();
      }
    },
    {
      label: 'ログアウト',
      icon: "pi pi-sign-out",
      // style:'font-size: 1.5rem;',
      command: () => {
        this.Logout();
      }
    },
    {
      label: 'Facebook',
      icon: "pi pi-fw pi-facebook",
      // style:'font-size: 0.7rem',
      url: 'https://www.facebook.com/Okta/',
    },
    {
      label: 'LinkedIn',
      icon: "pi pi-fw pi-linkedin",
      // style:'font-size: 0.7rem',
      url: 'https://www.linkedin.com/company/okta-inc-/',
    },
    {
      label: 'Youtube',
      icon: "pi pi-fw pi-youtube",
      // style:'font-size: 0.7rem',
      url: 'https://www.youtube.com/OktaInc',
    },
    {
      label: 'Twitter',
      icon: "pi pi-fw pi-twitter",
      // style:'font-size: 0.7rem',
      url: 'https://twitter.com/okta_japan',
    },

  ];

  async Logout() {
    this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }

  async signInHosted() {
    await this.HostedAuthService.closeSession();
    await this.HostedAuthService.signInWithRedirect();
    
  }

  async openiFrameModal() {
    await this.HostedAuthService.closeSession();
    const WidgetDialogConfig = new MatDialogConfig();
    WidgetDialogConfig.disableClose = false;
    WidgetDialogConfig.id = "iframe-modal-component";
    // WidgetDialogConfig.height = "700px";
    // WidgetDialogConfig.width = "450px";
    // WidgetDialogConfig.wid th = "80vw";
    const modalDialog = this._matdialog.open(IframeWidgetComponent, WidgetDialogConfig);
  }

  async openDefaultWidgetModal() {
    await this.HostedAuthService.closeSession();
    const WidgetDialogConfig = new MatDialogConfig();
    WidgetDialogConfig.disableClose = true;
    WidgetDialogConfig.id = "default-widget-modal-component";
    WidgetDialogConfig.height = "auto";
    WidgetDialogConfig.width = "auto";
    const modalDialog = this._matdialog.open(DefaultWidgetComponent, WidgetDialogConfig);
  }

  async openCustomWidgetModal() {
    await this.HostedAuthService.closeSession();
    const WidgetDialogConfig = new MatDialogConfig();
    WidgetDialogConfig.disableClose = true;
    WidgetDialogConfig.id = "custom-widget-modal-component";
    WidgetDialogConfig.height = "auto";
    WidgetDialogConfig.width = "auto";
    const modalDialog = this._matdialog.open(CustomWidgetComponent, WidgetDialogConfig);
  }

  
  async openSDKModal() {
    await this.HostedAuthService.closeSession();
    const WidgetDialogConfig = new MatDialogConfig();
    WidgetDialogConfig.disableClose = false;
    WidgetDialogConfig.id = "sdk-modal-component";
    WidgetDialogConfig.height = "auto";
    WidgetDialogConfig.width = "auto";

    // WidgetDialogConfig.height = "550px";
    // WidgetDialogConfig.width = "450px";

    const modalDialog = this._matdialog.open(SdkLoginComponent, WidgetDialogConfig);
  }

  
 

}
