import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickupComponentComponent } from './pickup-component/pickup-component.component';
import { DropOffComponent } from './drop-off/drop-off.component';
import { ActivatedRoute } from '@angular/router';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.page.html',
  styleUrls: ['./customer-booking.page.scss'],
})
export class CustomerBookingPage {
  pickUpLocation = 'Pickup Location';
  dropOffLocation = 'Dropoff Location';
  animationDirection: string = '';
  showDescription = false;
  @ViewChild(RouterOutlet, { static: true }) outlet!: RouterOutlet; // ViewChild to capture RouterOutlet
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute
  ) {}

  async openModal1() {
    console.log('Opening modal for pickup location...');
    const modal = await this.modalCtrl.create({
      component: PickupComponentComponent,
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    console.log('Modal dismissed with data:', data);
    if (data) {
      console.log('Updating pickUpLocation:', data);
      this.pickUpLocation = data;
    }
  }
  async openModal2() {
    const modal = await this.modalCtrl.create({
      component: DropOffComponent,
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    console.log('Modal dismissed with data:', data);
    if (data) {
      console.log('Updating pickUpLocation:', data);
      this.dropOffLocation = data;
    }
  }
  prepareRoute() {
    if (this.outlet) {
      return (
        this.outlet.activatedRouteData &&
        this.outlet.activatedRouteData['animation']
      );
    }
    return null;
  }
}
