import { Component, ChangeDetectorRef } from '@angular/core';
import { SegmentCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  selectedSegment: string = 'ongoing';
  constructor(private cdr: ChangeDetectorRef) {}
  onFilterUpdate(ev: SegmentCustomEvent) {
    const selectedValue = ev.detail.value as string;

    if (selectedValue !== undefined) {
      this.selectedSegment = selectedValue;
      console.log('ionChange emitted value:', this.selectedSegment);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }
}
