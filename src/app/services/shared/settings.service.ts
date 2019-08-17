import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  }
  constructor(@Inject(DOCUMENT) private _document,) {
    this.cargarAjustes()
    this.cambiarColor()
   }

  guardarAjustes(){
    localStorage.setItem('settings', JSON.stringify(this.ajustes))
  }

  cargarAjustes() {
    if(localStorage.getItem('settings')) {
      const settings =  localStorage.getItem('settings')
      this.ajustes = JSON.parse(settings)
    }
  }
  cambiarColor() {
    this._document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl)
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
};

