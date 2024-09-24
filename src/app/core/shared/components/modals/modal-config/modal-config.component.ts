import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-config',
  standalone: false,

  templateUrl: './modal-config.component.html',
  styleUrl: './modal-config.component.scss'
})
export class ModalConfigComponent {
  @Input() palette: string = "";
  themes = [
    { label: 'Default theme', class: 'default' },
    { label: 'Default theme whith controllers always openned', class: 'default-controllers-openned' },
    {label: "Strambotic theme", class:"strambothic_theme"}
  ];
  palettes = [
    { label: 'Midnight Light', class: 'midnight-light' },
    { label: 'Emerald Whisper', class: 'emerald-whisper' },
    { label: 'Sapphire Dream', class: 'sapphire-dream' },
    { label: 'Crimson Velvet', class: 'crimson-velvet' },
    { label: 'Amethyst Glow', class: 'amethyst-glow' },
    { label: 'Ivory Elegance', class: 'ivory-elegance' },
    { label: 'Royal Indigo', class: 'royal-indigo' },
    { label: 'Golden Sand', class: 'golden-sand' },
    { label: 'Mystic Forest', class: 'mystic-forest' },
    { label: 'Ocean Breeze', class: 'ocean-breeze' }
  ];

  selectedTheme: any;
  selectedTimerPalette: any;
  selectedMenuPalette: any;
  //selectedModalPalette: any;
  selectedButtonPalette: any;

  constructor(public activeModal: NgbActiveModal) {}

  saveSettings() {
    // Lógica para guardar la configuración
    this.activeModal.close({
      theme: this.selectedTheme,
      timerPalette: this.selectedTimerPalette,
      menuPalette: this.selectedMenuPalette,
      buttonPalette: this.selectedButtonPalette
     // modalPalette: this.selectedModalPalette
    });
  }

}


