import { Component } from '@angular/core';
import { SettingsService } from './services/shared/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private settingsServices : SettingsService) {
  }
  title = 'adminPro';
}
