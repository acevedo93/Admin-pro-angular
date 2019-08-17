import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'Graficas',
          url: '/grafics'
        },
        {
          titulo: 'ProgressBar',
          url: '/progress'
        },
      ]
    }
  ]

  constructor() { }
}
