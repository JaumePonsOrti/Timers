import { Component, Input, OnInit, Type } from '@angular/core';
import { TimerConfigModalComponent } from '../../modals/timer-config-modal/timer-config-modal.component';
import { ModalConfigComponent } from '../../modals/modal-config/modal-config.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../../../services/config/config.service';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {

  constructor(
    private config:ConfigService,
    private _modalService: NgbModal,

  ) { }

  @Input() public palette:string = "";  

  ngOnInit(): void {
  }

  open(){
    let modal = this._modalService.open(MODALS["general_config"]);
    
    modal.closed.subscribe((closed: any) => {

      console.log('CLOSED modal:', closed);
      if (closed != null) {
        this.config.save(closed);
      }
    });

    modal.dismissed.subscribe((dismis: any) => {
      //console.log('Dismis modal:', dismis);
    });
  }


}

const MODALS: { [name: string]: Type<any> } = {
  autofocus: TimerConfigModalComponent,
  general_config: ModalConfigComponent
};