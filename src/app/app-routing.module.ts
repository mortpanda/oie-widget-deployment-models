import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StartComponent } from './start/start.component';
// import { CustomWidgetComponent } from './custom-widget/custom-widget.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'start', component: StartComponent },
  
  // Test
  // { path: 'test', component: CustomWidgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
