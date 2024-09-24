import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { SharedModule } from './core/shared/shared.module';
import { TimerService } from './core/shared/services/timer.service';
import { StorageService } from './core/shared/services/storage/storage.service';
import { ConfigService } from './core/shared/services/config/config.service';

interface Alert {
  type: string,
  message: string
}
const alertControlUsuario: Alert[] = [
  {
    type: 'dark',
    message: 'Se te redirigira a la pagina de login en breves segundos. ',
  },
];
const alertControlSave: Alert[] = [
  {
    type: 'success',
    message: 'Se ha guardado correctamente los temporizadores',
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
    ScrollingModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Timers';

  constructor(
    public timmerService: TimerService,
    private storageService: StorageService,
    private renderer2: Renderer2,
    public config:ConfigService
  ) { }
  keys: string[] = ["", ""];
  position = 0;
  alerts: Alert[] = [];


  ngOnInit(): void {
    this.renderer2.listen("document", "keydown", (event: any) => {
      const key = event.key; // "A", "1", "Enter", "ArrowRight"...

      switch (this.position) {
        case 0:
          this.position = 1;
          break;
        default:
          this.position = 0;
          break;
      }
      this.keys[this.position] = key;

      if (
        this.keys[0] === "u" && this.keys[1] === "Control"
        || this.keys[1] === "u" && this.keys[0] === "Control"
        || this.keys[0] === "U" && this.keys[1] === "Control"
        || this.keys[1] === "U" && this.keys[0] === "Control") {
        event.preventDefault();
        event.stopPropagation();
        this.openAlert(alertControlUsuario);
      } else if (
        this.keys[0] === "s" && this.keys[1] === "Control"
        || this.keys[1] === "s" && this.keys[0] === "Control"
        || this.keys[0] === "S" && this.keys[1] === "Control"
        || this.keys[1] === "S" && this.keys[0] === "Control") {
        this.storageService.saveTemporizadores();
        this.openAlert(alertControlSave);
        event.preventDefault();
        event.stopPropagation();
      }

      console.log("Presionada: " + key);
    });
    this.renderer2.listen("document", "keyup", (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      this.keys = ["", ""];
      this.position = 0;
    });
    this.storageService.getTemporizadores();
  }

  alertInterval: any;
  suscribcionCerrarAlert() {
    this.alertInterval = setTimeout(
      () => {
        this.close(this.alerts[0])
      },environment.timeAlertInScreen
    );
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  openAlert(alert: Alert[]) {
    this.alerts = Array.from(alert);
    this.suscribcionCerrarAlert();
  }

  createTimer() {
    this.timmerService.createTimmer();
    this.storageService.saveTemporizadores();
  }
}
