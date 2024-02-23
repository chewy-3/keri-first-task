import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-costs-breakdown',
  templateUrl: './costs-breakdown.page.html',
  styleUrls: ['./costs-breakdown.page.scss'],
})
export class CostsBreakdownPage {
  constructor(private router: Router, private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'custom-loading',
      message: 'Finding a rider...',
      duration: 4000,
    });

    loading.onDidDismiss().then(() => {
      this.router.navigate(['/ongoing-etric']);
    });

    loading.present();
  }
}
