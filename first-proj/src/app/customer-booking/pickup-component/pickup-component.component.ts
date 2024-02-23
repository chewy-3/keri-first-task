import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-component',
  templateUrl: './pickup-component.component.html',
  styleUrls: ['./pickup-component.component.scss'],
})
export class PickupComponentComponent {
  @Output() locationConfirmed = new EventEmitter<string>();
  newLocation: string = '';

  constructor(private modalCtrl: ModalController, private router: Router) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: PickupComponentComponent, // Replace YourModalComponent with the component you use for the modal
    });
    await modal.present();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(this.newLocation);

    setTimeout(() => {
      this.router.navigate(['/customer-booking/drop-off']);
    }, 100);
  }
}
