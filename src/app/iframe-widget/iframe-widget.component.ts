import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
@Component({
  selector: 'app-iframe-widget',
  templateUrl: './iframe-widget.component.html',
  styleUrls: ['./iframe-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IframeWidgetComponent implements OnInit {
  public HostedAuthService = new OktaAuth(this.OktaSDKAuthService.HostedConfig);
  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
  ) { }

  async ngOnInit() {
    // await this.HostedAuthService.closeSession();
      await this.HostedAuthService.signInWithRedirect(); 
  }

}
