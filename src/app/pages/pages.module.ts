import { BrowserModule } from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafics1Component } from './grafics1/grafics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafics1Component,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    Grafics1Component,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class PagesModule { }