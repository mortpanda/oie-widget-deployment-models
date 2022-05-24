import { Component, OnInit } from '@angular/core';
import {OktaWidgetService} from '../shared/okta/okta-widget.service';
import { OktaConfigService } from '../shared/okta/okta-config.service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-default-widget',
  templateUrl: './default-widget.component.html',
  styleUrls: ['./default-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultWidgetComponent implements OnInit {

  constructor(
    private OktaWidgetService:OktaWidgetService,
    private OktaConfigService:OktaConfigService,
  ) { }

  
  async ngOnInit() {
    await this.OktaWidgetService.CloseWidget();
    await this.OktaWidgetService.login(this.OktaConfigService.strRedirectURL,this.OktaConfigService.strWidgetClientID);

  }

  async ReloadPage(){
    await window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }

}
