import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafics1Component } from './grafics1/grafics1.component';
import { ProgressComponent } from './progress/progress.component';
import { NoPageFoundComponent } from '../no-page-found/no-page-found.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'grafics', component: Grafics1Component},
      {path: 'progress', component: ProgressComponent},
      {path: 'account-settings', component: AccountSettingsComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: '**', component: NoPageFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
