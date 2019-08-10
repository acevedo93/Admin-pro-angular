import { BrowserModule } from '@angular/platform-browser'
import { NgModule} from '@angular/core'
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageFoundComponent } from '../no-page-found/no-page-found.component';


@NgModule({
  declarations: [
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent
  ],
  exports: [
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent
  ],
  imports: [],
  providers: [],
  bootstrap: []
})
export class SharedModule { }