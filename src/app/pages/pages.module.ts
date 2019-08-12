import { BrowserModule } from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { FormsModule} from '@angular/forms'
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafics1Component } from './grafics1/grafics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafics1Component,
    ProgressComponent,
    IncrementadorComponent
  ],
  exports: [
    DashboardComponent,
    Grafics1Component,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class PagesModule { }