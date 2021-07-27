import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
private element = document.querySelector("#theme");
  constructor() {
    const url = localStorage.getItem("theme") || "./assets/css/colors/default-dark.css"
    this.element?.setAttribute('href',url)
   }

   changeTheme(theme:string){

    const url = `./assets/css/colors/${theme}.css`;
     localStorage.setItem("theme",url);
     this.element?.setAttribute("href", url);


  }
}
