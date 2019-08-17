import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/shared/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, private settingsService: SettingsService) {
   }

  ngOnInit() {
    this.marcarCasilla()
  }
  cambiarColor(colortheme: string, link: any){
    const url = 'assets/css/colors/' + colortheme + '.css'
    // save on local storage
    console.log(colortheme,'tejhg')
    this.settingsService.ajustes.tema = colortheme
    this.settingsService.ajustes.temaUrl = url
    this.settingsService.guardarAjustes()
    this._document.getElementById('tema').setAttribute('href', url)

    this.aplicarCheck(link)
  }

  aplicarCheck(link: any) {
    let selectores  = document.getElementsByClassName('selector')
    const selectorMutable = [...selectores]
    selectorMutable.map(selector =>{
      selector.classList.remove('working')
    })
    link.classList.add('working')
  }

  marcarCasilla() {
    let selectores = document.getElementsByClassName('selector')
    const { tema } = this.settingsService.ajustes
   const selectorMutable = [...selectores]
   selectorMutable.map(selector => {
     console.log(selector)
    if(selector.getAttribute('data-theme') === tema ) {
      selector.classList.add('working')
    }
   })
  }

}
