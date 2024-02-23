import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ongoing-etric',
  templateUrl: './ongoing-etric.page.html',
  styleUrls: ['./ongoing-etric.page.scss'],
})
export class OngoingEtricPage {
  showDescription = false;
  constructor(private router: Router) {}

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  navigate() {
    this.router.navigate(['/tab2']);
  }

  navigate1() {
    this.router.navigate(['/rate-driver']);
  }
}
