import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ImageModule } from 'primeng/image';
import { DockModule } from 'primeng/dock';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';
import { IframeWidgetComponent } from './iframe-widget/iframe-widget.component';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { DefaultWidgetComponent } from './default-widget/default-widget.component';
import { CustomWidgetComponent } from './custom-widget/custom-widget.component';
import { SdkLoginComponent } from './sdk-login/sdk-login.component';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    StartComponent,
    IframeWidgetComponent,
    DefaultWidgetComponent,
    CustomWidgetComponent,
    SdkLoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    RippleModule,
    BrowserAnimationsModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule,
    ImageModule,
    DockModule,
    FlexLayoutModule,
    InputTextModule,
    TooltipModule,
    DialogModule,
    MatDialogModule,
    SpeedDialModule,
    ToastModule,
    PasswordModule,
    FormsModule,
    CardModule,
    DividerModule,
  ],
  providers: [IframeWidgetComponent, DefaultWidgetComponent, CustomWidgetComponent,SdkLoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
