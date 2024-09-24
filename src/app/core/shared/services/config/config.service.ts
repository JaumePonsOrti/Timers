import { Injectable } from '@angular/core';
import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config!:any;
  private defaultConfig:any = {
    "timerPalette":{
        "label":"Midnight Light", 
        "class":"midnight-light"    
    },
    "modalPalette":{
        "label":"Midnight Light", 
        "class":"midnight-light"    
    },
    "menuPalette":{
        "label":"Midnight Light", 
        "class":"midnight-light"    
    },
    "theme":
    {
        "label":"Default", 
        "class":"default"    
    },
    "buttonPalette":{
        "label":"Midnight Light",
        "class":"midnight-light"
    }
  }

  constructor() { 
   
  }

  getConfig(){
    this.config = JSON.parse( localStorage.getItem("global") || "{}");
    if(this.config.timerPalette == undefined) {
        this.config.timerPalette = this.defaultConfig.timerPalette;
    }
    if(this.config.modalPalette == undefined){
        this.config.modalPalette = this.defaultConfig.modalPalette;
    }
    if(this.config.menuPalette == undefined){
        this.config.menuPalette = this.defaultConfig.menuPalette;
    }
    if (this.config.theme == undefined) {
        this.config.theme = this.defaultConfig.theme;
    }
    if (this.config.buttonPalette == undefined) {
        this.config.buttonPalette = this.defaultConfig.buttonPalette;
    }
    return this.config;
  }

  save(o:any){
    if(o.timerPalette == undefined) {
        o.timerPalette = this.config.timerPalette?? this.defaultConfig.timerPalette;
    }
    if(o.modalPalette == undefined){
       o.modalPalette = this.config.modalPalette ?? this.defaultConfig.modalPalette;
    }
    if(o.menuPalette == undefined){
        o.menuPalette = this.config.menuPalette ?? this.defaultConfig.menuPalette;
    }
    if (o.theme == undefined) {
        o.theme = this.config.theme ?? this.defaultConfig.theme;
    }
    if (o.buttonPalette == undefined) {
        o.buttonPalette = this.config.buttonPalette ?? this.defaultConfig.buttonPalette;
    }


    this.config = o;
    localStorage.setItem("global",JSON.stringify(o));
    
  }
}
