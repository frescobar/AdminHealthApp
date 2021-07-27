import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings.service";


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  element = document.querySelector("#theme");
  constructor(private settings:SettingsService) { }

  ngOnInit(): void {

    this.checkCurrentTheme()
  }

  changeTheme(theme:string){

    this.settings.changeTheme(theme)

     this.checkCurrentTheme()

  }
checkCurrentTheme(){
  const links = document.querySelectorAll(".selector");

    links.forEach(ele=>{
    ele.classList.remove("working")
    const btnTheme = ele.getAttribute("data-theme");
    const themeUrl = `./assets/css/colors/${btnTheme}.css`
    const theme =  localStorage.getItem("theme")

    if(themeUrl === theme){
      ele.classList.add("working")
    }

  })
}

}
