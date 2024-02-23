import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-drop-off',
  templateUrl: './drop-off.component.html',
  styleUrls: ['./drop-off.component.scss'],
})
export class DropOffComponent {
  name: string = '';
  constructor(private modalCtrl: ModalController) {}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
