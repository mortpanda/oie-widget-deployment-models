import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OktaAuthenticationService } from '../shared/okta/okta-authentication.service';
import { OktaConfigService } from '../shared/okta/okta-config.service';
import { OktaWidgetService } from '../shared/okta/okta-widget.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sdk-login',
  templateUrl: './sdk-login.component.html',
  styleUrls: ['./sdk-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SdkLoginComponent implements OnInit {
  smallScreen: boolean;
  strUsername;
  strPassword;
  constructor(
    private OktaConfigService: OktaConfigService,
    private OktaAuthenticationService: OktaAuthenticationService,
    private OktaWidgetService: OktaWidgetService,
    private breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  ngOnInit(): void {
  }

  async Login() {


    try {
      var username = this.strUsername;
      var password = this.strPassword;

      // console.log(username);
      // console.log(password)

      await this.OktaAuthenticationService.login(username, password);


    } catch (err) {
      //alert(this.authService.strstateToken)     
      console.log(err)
      // this.loginInvalid = true;
    }

  }


}
